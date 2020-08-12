// Student name: Nguyen Hoang Trung Hieu
// Student ID: 142914191

var products = [
  {
    deal: 'No',
    category: 'Laptop',
    name: 'Apple MacBook Pro (2020)',
    price: '1,701.99 CA$',
    priceSale: '',
    image: 'images/product/appleMac_01.jpg',
    desc:
      'Apple MacBook Pro (2020) / Touch Bar 13.3 Inches - Space Grey <br> (Intel i5 1.4GHz / 256GB SSD / 8GB RAM) 1.4GHz quad-core 8th-generation Intel Core i5 processor <br> Turbo Boost up to 3.9GHz <br> Intel Iris Plus Graphics 645 8GB 2133MHz LPDDR3 memory.',
    brand: 'Apple'
  },
  {
    deal: 'No',
    category: 'Laptop',
    name: 'HP Omen - Gaming Laptop',
    price: '2,201.99 CA$',
    priceSale: '',
    image: 'images/product/HP_01.jpg',
    desc:
      '(Intel Core i7-10750H/1TB SSD/16GB RAM/NVIDIA GeForce RTX 2070) <br> HP Wide Vision HD camera along with a dual-array digital microphone offers crystal-clear video chats with your friends, family members, and teammates.',
    brand: 'HP'
  },
  {
    deal: 'No',
    category: 'Laptop',
    name: 'Dell Platinum Silver',
    price: '2,301.99 CA$',
    priceSale: '',
    image: 'images/product/Dell_01.jpg',
    desc:
      'Touchscreen Laptop - Platinum Silver (Intel i7-1065G7/512GB SSD/16GB RAM/Win 10) <br>XPS 13 webcam with new 4-element lens captures sharp footage for clear video calling and recording <br>Windows 10 Pro 64-Bit pre-installed operating system comes pre-loaded with McAfee LiveSafe (12 Month Subscription) and Microsoft Office (30 Day Trial) to get you started.',
    brand: 'Dell'
  },
  {
    deal: 'No',
    category: 'Laptop',
    name: 'Microsoft Surface',
    price: '1,351.99 CA$',
    priceSale: '',
    image: 'images/product/Microsoft_01.jpg',
    desc:
      'Touchscreen Laptop - Platinum (Intel Core i5-1035G7/256GB SSD/8GB RAM) - English <br> 13.5 Inches 2256 x 1504 PixelSense touchscreen is big, bright, and easy to use <br> Integrated Wi-Fi 6: 802.11ax and Bluetooth 5.0 for wireless internet access and pairing of accessories.',
    brand: 'Microsoft'
  },
  {
    deal: 'No',
    category: 'Accessories',
    name: 'Apple Watch Series 5(GPS) 40mm',
    price: '529.99 CA$',
    priceSale: '',
    image: 'images/product/watch-sr5.jpg',
    desc:
      'Case Diameter (mm): 40 mm<br>Display Size: 759 mm<br>Watch Series: Series 5 (GPS)<br>NFC Enabled: Yes<br>watchOS<br>Voice Assistant Build-in: Siri<br>Touchscreen: Yes<br>Water Resistance: Swimproof<br>Warranty: 1 Year.',
    brand: 'Apple'
  },
  {
    deal: 'Yes',
    category: 'Laptop',
    name: 'Lenovo ThinkPad X1 Carbon',
    price: '<strike>3,149.00</strike> CA$',
    priceSale: '1,889.40 CA$',
    image: 'images/product/lenovo_01.jpg',
    desc:
      'ThinkPad X1 Carbon Gen 8, 14.0 Inches<br>FHD IPS 400 nits, i7-10510U, UHD Graphics, 16GB, 1TB SSD, Win 10 Pro<br>Graphics Card: Integrated Intel® UHD Graphics<br>Warranty: 1 Year.',
    brand: 'Lenovo'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'iPhone 11 128GB',
    price: '1,049.99 CA$',
    priceSale: '',
    image: 'images/product/ip-11-128gb.jpg',
    desc:
      'Wireless Carrier: Unlocked <br>Product Condition: New<br>Display Size: 6.1 Inches<br>Storage: 128 GB<br>CPU: A13 Bionic Chip<br> iOS 13 - Video Capture Resolution 4k<br>Water Protection: Yes<br>Warranty: 1 Year.',
    brand: 'Apple'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'iPhone 11 64GB',
    price: '979.00 CA$',
    priceSale: '',
    image: 'images/product/ip-11-64gb.jpg',
    desc:
      'Wireless Carrier: Unlocked <br>Product Condition: New<br>Display Size: 6.1 Inches<br>Storage: 64 GB<br>CPU: A13 Bionic Chip<br> iOS 13 - Video Capture Resolution 4k<br>Water Protection: Yes<br>Warranty: 1 Year.',
    brand: 'Apple'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'Samsung Galaxy Fold',
    price: '2,599.99 CA$',
    priceSale: '',
    image: 'images/product/ss-fold.png',
    desc:
      'CPU Speed 2.8GHz, 2.4GHz, 1.7GHz<br>CPU: Octa-Core<br>Main Display: 7.3 Inches<br>Resulution: 2152 x 1536(QXGA+)<br>Display: Dynamic AMOLED<br>Video Recording Resolution: UHD 4K (3840 x 2160)@60fps<br>ROM Size: 512 GB<br>RAM Size: 12 GB<br>Network: Dual-SIM<br>USB Interface: USB Type-C.',
    brand: 'Samsung'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'Samsung Galaxy S20 Ultra',
    price: '3,290.000 CA$',
    priceSale: '',
    image: 'images/product/ss-s20ultra.png',
    desc:
      'CPU: Octa-core Snapdragon 865<br>Dual-SIM: No<br>Storage: 128 GB<br>Memory - Expansion: Yes - Up to 1TB<br>RAM Size: 12 GB<br>Android 10<br>12MP f/2.2 Ultra Wide, 108MP f/1.8 Wide, 48MP f/3.5 Telephoto, Depth Vision (ToF)<br>Front Video Capture Resolution: 3840 x 2160 UHD<br>Rear Video Capture Resolution: 8K<br>Dynamic AMOLED 2X.',
    brand: 'Samsung'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'Samsung Galaxy S10+ 512GB',
    price: '849.99 CA$',
    priceSale: '',
    image: 'images/product/ss-s10.jpg',
    desc:
      'Wireless Carrier: Unlocked <br>Product Condition: New<br>Display Size: 6.4 Inches<br>Storage: 512 GB<br>CPU: Snapdragon 845<br>Video Capture Resolution 4K<br>RAM Size: 8 GB<br>Water Protection: Yes<br>Warranty: 1 Year.',
    brand: 'Samsung'
  },
  {
    deal: 'No',
    category: 'Phone',
    name: 'Samsung Galaxy Note 10+',
    price: '1,401.99 CA$',
    priceSale: '',
    image: 'images/product/ss-note10+.jpg',
    desc:
      'Wireless Carrier: Unlocked <br>Product Condition: New<br>Display Size: 6.8 Inches - Dynamic AMOLED; 3,040x1,440 pixels<br>Storage: 256 GB<br>CPU: Snapdragon 855<br>Video Capture Resolution 4K<br>RAM Size: 12 GB<br>Water Protection: Yes<br>Warranty: 1 Year.',
    brand: 'Samsung'
  },
  {
    deal: 'Yes',
    category: 'Phone',
    name: 'Samsung Galaxy S10 Lite',
    price: '<strike>690.00</strike> CA$',
    priceSale: '590.00 CA$',
    image: 'images/product/ss-s10lite.jpg',
    desc:
      'Processor: Qualcomm SM8150 Snapdragon 855<br>Super Steady OIS Camera<br>4500mAh 2-day intelligent battery<br>Super Fast Charging<br>RAM Size: 8 GB<br>Storage: 128 GB.',
    brand: 'Samsung'
  },
  {
    deal: 'Yes',
    category: 'Accessories',
    name: 'Beats by Dr. Dre Studio3 Over-Ear',
    price: '<strike>399.99</strike>  CA$',
    priceSale: '299.99 CA$',
    image: 'images/product/headphone-01.jpg',
    desc:
      'Noise Cancelling Bluetooth Headphones<br>Bluetooth technology offers the convenience of wireless audio streaming from your compatible devices<br>Rechargeable battery offers up to 22 hours of full-featured all-day wireless playback<br>Fast Fuel option gives you up to 3 hours of play from just a 10-minute charge when the battery is low.',
    brand: 'Beats'
  },
  {
    deal: 'Yes',
    category: 'Accessories',
    name: 'Microsoft Surface Arc Mouse',
    price: '<strike>100.74</strike>  CA$',
    priceSale: '80.74 CA$',
    image: 'images/product/m-mouse.jpg',
    desc:
      'Ultra-thin and ultra-lightweight wireless mouse is designed to conform to the natural curvature of your hand for enhanced all-day comfort<br>Clean, elegant, and minimalist style looks great in any workspace and is designed to complement your other Microsoft Surface devices (sold separately)<br>Built-in Bluetooth 4.0 technology allows for a quick and easy wireless connection to avoid the hassle of dealing with cables.',
    brand: 'Microsoft'
  }
];

// let emailAdd = document.getElementById('emailAddress');

// let formEmail = document.getElementById('form-email');

// if (formEmail.attachEven) {
//   formEmail.attachEven('submit', onFormSubmit);
// } else formEmail.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   let;
// }
