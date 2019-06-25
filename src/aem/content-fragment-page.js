export default class ContentFragmentPage {
  constructor(json) {
    this.body = json['jcr:content'].data.master.body;
    this.description = json['jcr:content'].data.master.description;
  }
}
