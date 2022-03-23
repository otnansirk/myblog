---
date: '2022-03-24 00:19'
path: /Vuex-flow-and-mini-example
thumbnail: /assets/default-image.png
tags:
  - Belajar Laravel
  - Belajar Koding
  - Atom Editor
  - Belajar Codeigniter
  - Belajar Jekyll
  - Belajar Flutter
  - Belajar JavaScript
  - Belajar Laravel
  - CI 4 Codeigniter
  - Codeigniter 4
  - Belajar CSS
  - Belajar Git
  - Belajar Slim
  - VS Code Editor
  - Belajar Database mongoDB
label: VueJs
author: Kris
---
# Vue x flow

### state -> value data tersimpan yang dipaggil menggunakan getters
```
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',  
	state: {
		stateKeyName: "halooo",
    }
})
```
if `strict` set to true this not allowed to mutate vuex from outsite mutations


### getters -> memanggil nilai dari state
diclare getters:
```
gettersName: state => {
    return state.StateKeyName
}
```

### mutations -> digunakan untuk memanipulasi data di state yang akan dipaggil dari actions
diclare mutations:
```
mutationsName: state => {
    state.StateKeyName = newValue
}
```

use action:
```
this.$store.commit('actionsName')
```


### actions -> eksekusi untuk mentriger mutation 
diclare action:
```
actionName: context => {
    context.commit('mutationName')
}
```

use action:
```
this.$store.dispath('actionsName')
```
