import Vue from 'vue';
import {
  Toast,
  Dialog,
  List,
  Cell,
  CellGroup,
  Row,
  Col,
  Button,
} from 'vant';

// Vue.component(Toast.name, Toast);
Vue.component(Dialog.name, Dialog);
Vue.component(List.name, List);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.prototype.$toast = Toast;
Vue.prototype.$loadIn = (message = '加载中...', options) => Toast.loading({
  ...options,
  message,
  duration: 0, // 持续展示 toast
  forbidClick: true, // 禁用背景点击
});
Vue.prototype.$loadOut = () => Toast.clear();
Vue.prototype.$dialog = Dialog;
