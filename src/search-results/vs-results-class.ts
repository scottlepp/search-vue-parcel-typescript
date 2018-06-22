import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component
export default class VsResults extends Vue {

  @Prop()
  data;

  get results() {
    return this.data;
  }

  truncate(text, limit) {
    text = text === undefined ? '' : text;    
    const content = text.split(' ').slice(0, limit);
    return content.join(' ');
  }

  error(item) {
    delete item.thumb;
    this.$forceUpdate();
  }
}