---
date: '2022-03-09 18:43'
path: /How-to-fix-missing-depedency-warning-when-use-react-useEffect
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
label: ReactJs
author: Kris
---
Example Warning code : 

```
const [data, setData] = useState({})
const user = {
  name : 'kris'
}

useEffect(() => {
   setData({...data, name: user.name});
}, []);
```

You can fix it with this

```
useEffect(() => {
   setData((d) => ({...d, name: user.name}));
}, []);
```

Any way to do besides [this](https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook#answer-60327893)
