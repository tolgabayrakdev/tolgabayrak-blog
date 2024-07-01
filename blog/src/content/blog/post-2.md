---
title: Veritabanı Yönetimi İçin Temel SQL Komutları
excerpt: SQL (Structured Query Language), veritabanlarıyla etkileşim kurmak için kullanılan bir dildir. Veritabanı yönetimi ve veri manipülasyonu için standart bir dil olarak kabul edilir. SQL, veri sorgulama, veri ekleme, güncelleme ve silme gibi çeşitli işlemleri gerçekleştirmek için kullanılır.
publishDate: 'July 1 2024'
isFeatured: true
tags:
  - SQL
  - Technology
seo:
  image:
    src: '/post-2.jpg'
---

![SQL blog resmi](/post-2.jpg)


Veritabanı yönetimi, günümüzün veri odaklı dünyasında kritik bir beceri haline gelmiştir. SQL nedir? SQL (Structured Query Language), veritabanlarıyla etkileşim kurmak için kullanılan standart bir dildir. Bu blog yazısında, en yaygın SQL komutlarını ve nasıl kullanıldıklarını keşfedeceğiz.

## SQL Nedir ?

SQL kullanımı, veritabanlarını yönetmek ve manipüle etmek için önemli bir dildir. SQL, veritabanı oluşturma, veri ekleme, güncelleme ve silme gibi çeşitli işlemleri gerçekleştirmek için kullanılır.

## Temel SQL Komutları

1. **SELECT:** SELECT komutu, veritabanından veri sorgulamak için kullanılır. SQL SELECT komutu, belirli sütunları veya tüm satırları seçmek için kullanılır.

```sql
SELECT column1, column2 FROM table_name;

```

2. **INSERT:** INSERT komutu, bir tabloya yeni kayıtlar eklemek için kullanılır. SQL INSERT komutu, veritabanına yeni veri eklemek için kullanılır.

```sql
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
INSERT INTO customers (name, address) VALUES ('Ahmet', 'İstanbul');


```

3. **UPDATE:** UPDATE komutu, mevcut kayıtları güncellemek için kullanılır. SQL UPDATE komutu, veritabanındaki verileri güncellemek için kullanılır.

```sql
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
UPDATE customers SET address = 'Ankara' WHERE customer_id = 1;

```

4. **DELETE:** DELETE komutu, bir tablodan mevcut kayıtları silmek için kullanılır. SQL DELETE komutu, veritabanından veri silme işlemini gerçekleştirir.

```sql
DELETE FROM table_name WHERE condition;
DELETE FROM table_name WHERE username = "Joe";

```

5. **CREATE TABLE:** CREATE TABLE komutu, yeni bir tablo oluşturmak için kullanılır. SQL CREATE TABLE komutu, veritabanında yeni bir tablo oluşturmak için kullanılır.

```sql
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(100)
);

```
Tabloyu silmek içinde ''DROP TABLE'' komutu kullanılır

```sql
DROP TABLE cutomers;

```

6. **ORDER BY:** ORDER BY ifadesi, SQL'de sorgu sonuçlarını belirli bir düzene göre sıralamak için kullanılır. Sonuçları artan (ASC) veya azalan (DESC) sıraya göre sıralayabilirsiniz.

Artan Sıralama:
```sql
SELECT * FROM customers ORDER BY name ASC;

```
Azalan Sıralama:
```sql
SELECT * FROM orders ORDER BY order_date DESC;

```


7. **GROUP BY:** GROUP BY ifadesi, SQL'de satırları belirli bir sütuna göre gruplamak için kullanılır. Genellikle grup içindeki her bir kategori için toplama (SUM), ortalama (AVG), sayı (COUNT) gibi toplama fonksiyonları ile birlikte kullanılır.

- Şehirlere Göre Müşteri Sayısını Gruplamak:

```sql
SELECT city, COUNT(*) FROM customers GROUP BY city;

```
- Müşterilere Göre Toplam Sipariş Tutarını Gruplamak:

```sql
SELECT customer_id, SUM(order_amount) FROM orders GROUP BY customer_id;
```




### Sonuç

SQL komutları, veritabanı yönetimi ve manipülasyonu için temel araçlardır. Bu temel komutları öğrenmek, veritabanları ile etkili bir şekilde çalışmanıza yardımcı olacaktır. Daha ileri düzey SQL komutları ve uygulamaları hakkında daha fazla bilgi edinmek için blogumuzu takip etmeye devam edin.

