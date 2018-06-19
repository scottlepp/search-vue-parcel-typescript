import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

  @Prop()
  text;
}