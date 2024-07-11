---
title: JavaScript'te Yaygın Kullanılan Metodlar:Split, Filter ve Daha Fazlası
excerpt: JavaScript, diziler ve stringler üzerinde çeşitli işlemler yapmamızı sağlayan birçok yerleşik metoda sahiptir.Bu yazıda, split(), filter(), map(), reduce(), forEach() gibi yaygın kullanılan metodları inceleyeceğiz.
publishDate: 'July 11 2024'
tags:
  - JavaScript
  - Software
seo:
  image:
    src: '/post-3.jpg'
    alt: javascript
---

![JavaScript blog resmi](/post-3.jpg)


## JavaScript Nedir?
JavaScript, dinamik ve etkileşimli web sayfaları oluşturmak için kullanılan yüksek seviyeli, yorumlanan bir programlama dilidir. HTML ve CSS ile birlikte web geliştirme için temel teknolojilerden biridir.
İlk olarak 1995 yılında Brendan Eich tarafından Netscape için geliştirilmiştir ve günümüzde modern web tarayıcılarının tümünde desteklenmektedir.

## JavaScript Nerelerde Kullanılır?

- Web Geliştirme: Web sayfalarına etkileşim katmak için kullanılır. Örneğin, kullanıcı girdilerini işleme, animasyonlar oluşturma, dinamik içerik yükleme.
- Sunucu Tarafı Programlama: Node.js gibi platformlarla, JavaScript sunucu tarafında da çalıştırılabilir, bu sayede tam yığın (full-stack) geliştirme mümkündür.
- Mobil Uygulama Geliştirme: React Native gibi çerçevelerle, JavaScript kullanarak mobil uygulamalar geliştirmek mümkündür.
- Oyun Geliştirme: Phaser gibi kütüphaneler kullanılarak 2D oyunlar geliştirilebilir.
- Yapay Zeka ve Makine Öğrenimi: TensorFlow.js gibi kütüphanelerle, tarayıcı üzerinde makine öğrenimi modelleri oluşturulabilir ve çalıştırılabilir.
- IoT (Nesnelerin İnterneti): JavaScript, IoT cihazları için yazılım geliştirmede de kullanılabilir.
- Masaüstü Uygulamaları: Electron gibi platformlarla masaüstü uygulamaları geliştirmek mümkündür.


## JavaScript'deki bazı sık kullanılan metodlar

1. **Split:** split() metodu, bir stringi belirli bir ayırıcıya göre parçalara ayırır ve bir dizi (array) döner.

```js
const text = "JavaScript,React,Node.js";
const result = text.split(",");
console.log(result); // ["JavaScript", "React", "Node.js"]
```

2.**Filter:** filter() metodu, bir diziyi belirtilen koşula göre filtreler ve yeni bir dizi döner.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

3.**Map:** map() metodu, bir dizinin her bir elemanı için belirtilen işlevi çağırır ve yeni bir dizi döner.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

4.**Reduce:** reduce() metodu, bir diziyi tek bir değere indirger.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

5.**forEach:** forEach() metodu, bir dizinin her bir elemanı için belirtilen işlevi çağırır.

```js
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));
// "apple"
// "banana"
// "cherry"
```
Bu metodlar, JavaScript'te verileri işlemek ve manipüle etmek için güçlü araçlardır.
Daha etkili ve okunabilir kod yazmamıza yardımcı olurlar.