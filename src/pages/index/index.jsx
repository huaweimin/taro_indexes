import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import "./index.scss";
import IndexBarList from "./indexBarList";

const list = [
  {
    index: "A",
    list: ["Apple", "Apricot", "Avocado"],
  },
  {
    index: "B",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "C",
    list: ["Cherry", "Coconut"],
  },
  {
    index: "D",
    list: ["Date"],
  },
  {
    index: "F",
    list: ["Fig"],
  },
  {
    index: "E",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "G",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "H",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "I",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "J",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "K",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "L",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "M",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "N",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },

  {
    index: "O",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "P",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "Q",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "R",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "S",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "T",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "U",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "V",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "W",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },

  {
    index: "X",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "Y",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
  {
    index: "Z",
    list: ["Banana", "Blackberry", "Blueberry", "Boysenberry"],
  },
];

@inject("store")
@observer
class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <IndexBarList list={list} />
      </View>
    );
  }
}

export default Index;
