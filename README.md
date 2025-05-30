# 21091029
Mobil Programlama Proje Ödevi
# Katılımcı Planlama Uygulaması

Bu mobil uygulama, kullanıcıların yaşadıkları mahalleyi seçerek o mahalleye yönelik bir tesis tercihinde bulunmalarını ve bu tercihlerini kişisel bir yorumla ifade etmelerini sağlamaktadır. Uygulama, planlama süreçlerinde halk katılımını teşvik etmeyi amaçlayan basit ama işlevsel bir mobil araç olarak tasarlanmıştır.

## Projenin Amacı

Katılımcı planlama ilkelerine uygun olarak geliştirilen bu uygulama, kullanıcıların interaktif bir şekilde mahalle ve tesis tercihlerinde bulunmalarını sağlar. Aynı zamanda uygulama, bu tercihlerin nedenlerini kullanıcıdan alarak daha anlamlı bir geri bildirim mekanizması sunar. Böylece mahalli ihtiyaçlar ve talepler belediye tarafından gözetilmiş olur.

## Uygulama Akışı

Uygulama 5 ekrandan oluşmaktadır:

1. **Ana Sayfa** – Başlangıç görseli ve yönlendirme butonu içerir.  
2. **Mahalle Seçim Ekranı** – Harita ve arama çubuğu ile mahalle seçimi yapılır.  
3. **Tesis Seçim Ekranı** – Seçilen mahalleye göre tesis ikonları üzerinden seçim yapılır.  
4. **Neden Ekranı** – Kullanıcıdan tesis tercihiyle ilgili neden ve ad-soyad bilgisi alınır. Bilgi girilmeszse alert veriyor.
5. **Teşekkür Ekranı** – API'den ülke bilgileri çekilerek geri bildirim gösterilir.Türkiyenin geleceğine dair faydalı bir katkı yaptıkları hatırlatılır.

## Kullanılan Teknolojiler

- **React Native (Expo)**
- **React Navigation** – Sayfalar arası geçiş için
- **useContext** – Global state yönetimi
- **Rest Countries API** – Teşekkür ekranında Türkiye ile ilgili verileri çekmek için  
  `https://restcountries.com/v3.1/name/turkey`

## Kullanılan API

Uygulamanın son ekranında, `Rest Countries API` kullanılarak Türkiye'nin başkenti, nüfusu, kıtası ve bayrak görseli çekilmektedir. Bu bilgiler uygulamanın kapanış ekranında kullanıcıya sunulur.

## Kurulum ve Çalıştırma

1. Gerekli kütüphaneleri yükleyin ve çalıştırın:
   ```bash
   npm install
   npx expo start
## Ekran Bileşenleri
HomeScreen.js – Ana ekran

NeighborhoodScreen.js – Mahalle seçimi

FacilityScreen.js – Tesis seçimi

ReasonScreen.js – Geri bildirim formu

ThanksScreen.js – API verisiyle teşekkür mesajı

Footer.js – Tüm ekranlarda sabit alt bilgi

AppContext.js – Global state için context yönetimi

Button.js – Özel buton bileşeni

## uygulama kullanım videosu: https://www.youtube.com/shorts/wb0bp23Jr1M

## -- Mobil programlama dersi için hazırlanmıştır 21091029 Okan Yılmaz