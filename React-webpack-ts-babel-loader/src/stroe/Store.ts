import { observable, action, autorun } from 'mobx'
class MyStore {
    @observable count = 0;

    @action addCount() {
        this.count++;
        autorun(() => {
            console.log(this)
        })
    }
    
}
const store = new MyStore()

export default store