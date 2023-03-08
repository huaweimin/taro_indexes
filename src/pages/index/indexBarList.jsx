import Taro from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import classNames from "classnames";
import "./indexBarList.scss";
import { useEffect, useState } from "react";

function IndexBarList(props) {
  const { list } = props;
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    return () => {
      // 取消滚动事件监听
      Taro.createIntersectionObserver(this)
        .disconnect()
        .relativeToViewport({ bottom: 0 })
        .observe(".index-bar-list__content", () => {});
    };
  }, [props]);

  const handleClick = (index) => {
    let currentScrollTop = scrollTop
    Taro.nextTick(() => {
      let query = Taro.createSelectorQuery();
      query.select(`#index_${index}`).boundingClientRect();
      query.exec((rect) => {
        const scrollTop = currentScrollTop + rect[0].top;
        setActiveIndex(index);
        setScrollTop(scrollTop);
        Taro.pageScrollTo({ scrollTop, duration: 0 });
      });
    });
  };

  const handleScroll = (e) => {
    const { list } = props;
    const { scrollTop } = e.detail;
    Taro.nextTick(() => {
      let activeIndex = null;
      for (let i = 0; i < list.length; i++) {
        let query = Taro.createSelectorQuery();
        query.select(`#index_${i}`).boundingClientRect();
        query.exec((rect) => {
          if (rect[0].top <= 20 && rect[0].bottom >= 20) {
            activeIndex = i;
            setActiveIndex(activeIndex);
          }
        });
      }
      process.env.TARO_ENV === "h5" ? setScrollTop(scrollTop) : null;
    });
  };

  return (
    <View className="index-bar-list">
      <ScrollView
        className="index-bar-list__content"
        scrollY
        scrollWithAnimation
        onScroll={handleScroll}
        style={{ height: "100vh" }}
        scrollTop={scrollTop}
      >
        {list.map((item, index) => (
          <View
            className="index-bar-list__item"
            id={`index_${index}`}
            key={item.index}
          >
            <View className="index-bar-list__title">{item.index}</View>
            {item.list.map((subItem, subIndex) => (
              <View
                className="index-bar-list__sub-item"
                key={`${item.index}_${subIndex}`}
              >
                <Text className="index-bar-list__name">{subItem}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <View className="index-bar-list__sidebar">
        {list.map((item, index) => (
          <View
            className={classNames("index-bar-list__sidebar-item", {
              "index-bar-list__sidebar-item--active": activeIndex === index,
            })}
            key={item.index}
            onClick={() => handleClick(index)}
          >
            {item.index}
          </View>
        ))}
      </View>
    </View>
  );
}

export default IndexBarList;
