/*
 * Dogesh Bhai: Gurgaon pet boarding & vet directory.
 *
 * Entries with a `placeId` come from Google Maps: exact pin, phone, Google rating,
 * review count and address. The rest keep the details we collected from public
 * listings (Justdial, Practo, PetBacker, business sites); `ratingSource` and
 * `phoneSource` say where each figure came from, and their pins are sector-level.
 * Directions always open Google Maps with the name + address, so navigation
 * lands on the real place either way.
 *
 * To refresh from Google Places (and pick up new places), run:
 *   GOOGLE_MAPS_API_KEY=xxx node scripts/fetch-google-places.mjs
 */
window.LISTINGS = [
  {
    "id": "furrvy-27",
    "type": "boarding",
    "name": "Furrvy",
    "area": "Sector 27",
    "address": "199, Sector 27, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.467641,
    "lng": 77.088955,
    "rating": 4.8,
    "reviews": 111,
    "ratingSource": "Google",
    "tags": [
      "Boarding",
      "Daycare",
      "Cage-free"
    ],
    "price": "₹1,000 / night",
    "open24": false,
    "placeId": "ChIJIesjWF2MeGcRZ0z35LIjvDI",
    "phone": "+91 6355 093 941",
    "phoneSource": "Google",
    "website": "https://furrvy.com/"
  },
  {
    "id": "furrvy-58",
    "type": "boarding",
    "name": "Furrvy",
    "area": "Sector 58",
    "address": "near Heritage Xperiential International School, sector 58, Balola, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4173866,
    "lng": 77.1234285,
    "rating": 4.7,
    "reviews": 75,
    "ratingSource": "Google",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "price": "₹1,000 / night",
    "open24": false,
    "placeId": "ChIJI0oF174hDTkR8-4JOsXPKTM",
    "phone": "+91 6355 093 941",
    "phoneSource": "Google",
    "website": "https://furrvy.com/"
  },
  {
    "id": "happy-pettings",
    "type": "boarding",
    "name": "Happy Pettings",
    "area": "Sushant Lok 2",
    "address": "Huda Plot 1, near Kirti Hospital, Sector 56, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4248944,
    "lng": 77.09173299999999,
    "rating": 4.8,
    "reviews": 1144,
    "ratingSource": "Google",
    "tags": [
      "Home boarding",
      "Daycare",
      "Grooming"
    ],
    "phone": "+91 99104 70476",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJj_NHjvghDTkROPdrMXWUcHo",
    "website": "https://www.happypettings.com/"
  },
  {
    "id": "pankaj-dog",
    "type": "boarding",
    "name": "Pankaj Dog Training & Boarding House",
    "area": "Sector 9",
    "address": "Near ESIC Hospital, Sector 9, Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4672,
    "lng": 77.0162,
    "rating": 4.9,
    "reviews": 312,
    "ratingSource": "Justdial",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": false
  },
  {
    "id": "pet-lovers-hut",
    "type": "boarding",
    "name": "Pet Lovers Hut - Pet Resort GURUGRAM",
    "area": "Sector 63A",
    "address": "Cafe Bark Village, Pet Lovers Hut - Pet Resort and Cafe, Sector 63A, Kadarpur, Haryana 122098, India",
    "pincode": "122098",
    "lat": 28.3953529,
    "lng": 77.108094,
    "rating": 4.6,
    "reviews": 195,
    "ratingSource": "Google",
    "tags": [
      "Pet resort",
      "Cafe",
      "Daycare"
    ],
    "open24": false,
    "placeId": "ChIJ1Q8CrYghDTkRByjznsC90Wg",
    "phone": "+91 97100 07381",
    "phoneSource": "Google",
    "website": "https://dogboardinggurgaon.com/"
  },
  {
    "id": "snoop-dogs",
    "type": "boarding",
    "name": "Snoop Dog Care",
    "area": "Sector 10",
    "address": "538, Krishna Nagar, Sector 10, Gurugram, Haryana 122001, India",
    "pincode": "122001",
    "lat": 28.455138400000003,
    "lng": 77.0020421,
    "rating": 4.9,
    "reviews": 100,
    "ratingSource": "Google",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJp83Vym8XDTkRyXaYq6wyn-A",
    "phone": "+91 87009 09296",
    "phoneSource": "Google",
    "website": "https://snoopdogspetcare.com/"
  },
  {
    "id": "buddy-pets",
    "type": "boarding",
    "name": "Buddy Pets",
    "area": "Golf Course Road",
    "address": "133, Parsvnath Exotica, DLF Phase 5, Sector 53, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.438298099999997,
    "lng": 77.1008329,
    "rating": 4.7,
    "reviews": 27,
    "ratingSource": "Google",
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJ9eB7qk4ZDTkRmwDvOE_GLUQ",
    "phone": "+91 84484 89140",
    "phoneSource": "Google",
    "website": "https://www.buddypets.co.in/"
  },
  {
    "id": "lucy-pet-home",
    "type": "boarding",
    "name": "Lucy Pet Home Boarding",
    "area": "Sector 56",
    "address": "Sector 56, Gurugram, Haryana",
    "pincode": "122011",
    "lat": 28.4198,
    "lng": 77.0998,
    "rating": 5,
    "reviews": 1,
    "ratingSource": "PetBacker",
    "tags": [
      "Home boarding",
      "Dogs & rabbits"
    ],
    "price": "From ₹850 / night",
    "open24": false
  },
  {
    "id": "tail-magic",
    "type": "boarding",
    "name": "Tail Magic",
    "area": "Sector 57",
    "address": "Sushant Lok 3, Sector 57, Gurugram, Haryana",
    "pincode": "122011",
    "lat": 28.4224,
    "lng": 77.0882,
    "rating": null,
    "reviews": null,
    "tags": [
      "Home boarding",
      "Canine consultants"
    ],
    "phone": "+91 98180 48057",
    "phoneSource": "magicpin",
    "open24": false
  },
  {
    "id": "pawsome-paradise",
    "type": "boarding",
    "name": "Pawsome Paradise 🐾 Homebased Pet Boarding",
    "area": "Sector 57",
    "address": "308, Sector 23 Rd, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.508032699999998,
    "lng": 77.0519669,
    "rating": 4.9,
    "reviews": 230,
    "tags": [
      "Home boarding",
      "Small batches"
    ],
    "open24": false,
    "placeId": "ChIJaWTs_jYZDTkRomjis8iK6rc",
    "ratingSource": "Google",
    "phone": "+91 88009 70401",
    "phoneSource": "Google",
    "website": "https://youtube.com/@pawsomepetvlogs?si=n_LsH4XvKzk_JtA4"
  },
  {
    "id": "pawing-guests",
    "type": "boarding",
    "name": "PawingGuests The Pet PG",
    "area": "Sector 56",
    "address": "opposite Kendriya Vihar, Block B, Sector 56, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4246949,
    "lng": 77.0945348,
    "rating": 5,
    "reviews": 16,
    "tags": [
      "Pet hostel"
    ],
    "open24": false,
    "placeId": "ChIJ8VMU9pEjDTkRdLBeHf-yb7I",
    "ratingSource": "Google",
    "phone": "+91 79825 38789",
    "phoneSource": "Google"
  },
  {
    "id": "pet-zone",
    "type": "boarding",
    "name": "The Pet Zone",
    "area": "Sohna Road",
    "address": "Near Sheetla Mata Mandir Road, Sohna Road, Gurugram, Haryana",
    "pincode": "122018",
    "lat": 28.4101,
    "lng": 77.0452,
    "rating": 4.2,
    "reviews": 103,
    "ratingSource": "Justdial",
    "tags": [
      "Dog hostel",
      "Training"
    ],
    "open24": false
  },
  {
    "id": "golden-pet-farm",
    "type": "boarding",
    "name": "Golden Pet Farm",
    "area": "Badshahpur",
    "address": "Main Darbaripur Road, near Mata Mandir, Badshahpur, Gurugram, Haryana",
    "pincode": "122101",
    "lat": 28.3952,
    "lng": 77.0448,
    "rating": null,
    "reviews": null,
    "tags": [
      "Farm boarding",
      "Open 24 hours"
    ],
    "open24": true
  },
  {
    "id": "barks-meows",
    "type": "boarding",
    "name": "Barks and Meows",
    "area": "Gwal Pahari",
    "address": "Faridabad - Gurgaon Rd, Gwal Pahari, Gurugram, Bandhwari, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.429297000000002,
    "lng": 77.1408953,
    "rating": 4.8,
    "reviews": 454,
    "tags": [
      "Boarding",
      "Dogs & cats"
    ],
    "open24": false,
    "placeId": "ChIJN6DknGwhDTkRmuYc0coLs4Q",
    "ratingSource": "Google",
    "phone": "+91 89293 47650",
    "phoneSource": "Google",
    "website": "http://www.barksandmeows.in/"
  },
  {
    "id": "bark-spark",
    "type": "boarding",
    "name": "Bark & Spark Pet Boarding",
    "area": "Sector 109",
    "address": "Plot No R-81, behind Conscient one mall, New Palam Vihar, Sector 109, Gurugram, Haryana 122006, India",
    "pincode": "122006",
    "lat": 28.5090157,
    "lng": 77.0120318,
    "rating": 4.9,
    "reviews": 368,
    "tags": [
      "AC rooms",
      "Daycare",
      "24h boarding"
    ],
    "open24": true,
    "placeId": "ChIJu_AL_UYZDTkRj3uUB5BRgRQ",
    "ratingSource": "Google",
    "phone": "+91 97161 09619",
    "phoneSource": "Google",
    "website": "http://barkandspark.pet/"
  },
  {
    "id": "tails-coffee",
    "type": "boarding",
    "name": "Tails & Coffee",
    "area": "Sector 31",
    "address": "House No- 453, Sector 31, Gurugram, Haryana 122001, India",
    "pincode": "122001",
    "lat": 28.4541951,
    "lng": 77.05207539999999,
    "rating": 4.8,
    "reviews": 212,
    "tags": [
      "Boarding",
      "Pet cafe"
    ],
    "open24": false,
    "placeId": "ChIJO5EVXJUZDTkRhBQfPpJrkGM",
    "ratingSource": "Google",
    "phone": "+91 92055 53533",
    "phoneSource": "Google",
    "website": "https://tailsncoffee.com/"
  },
  {
    "id": "oma-pet",
    "type": "boarding",
    "name": "Oma Pet Boarding",
    "area": "Nangli Umarpur",
    "address": "Sco 70, M3M 113 Market, Dwarka Expy, Sector 111, Bajghera, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.5228488,
    "lng": 77.02491599999999,
    "rating": 5,
    "reviews": 24,
    "ratingSource": "Google",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJoZD90sgbDTkRg0X1d_CjAhc",
    "phone": "+91 99907 74979",
    "phoneSource": "Google",
    "website": "https://www.omapetboarding.com/"
  },
  {
    "id": "dogs-inn",
    "type": "boarding",
    "name": "Dogs Inn",
    "area": "Sector 46",
    "address": "Block A, 155, Sector 56 Rd, Sector 56, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.425981900000004,
    "lng": 77.09433469999999,
    "rating": 4.7,
    "reviews": 74,
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJFwTBuuQZDTkRLZji5-qjQfI",
    "ratingSource": "Google",
    "phone": "+91 80768 99491",
    "phoneSource": "Google",
    "website": "http://www.dogsinnn.in/"
  },
  {
    "id": "skrd",
    "type": "vet",
    "name": "SKRD Veterinary Hospital",
    "area": "Sector 31",
    "address": "Plot No.- 584, near Chopra Diagnostic, Sector 31, Gurugram, Haryana 122001, India",
    "pincode": "122001",
    "lat": 28.4565204,
    "lng": 77.0533301,
    "rating": 4.6,
    "reviews": 1940,
    "ratingSource": "Google",
    "tags": [
      "Multi-speciality",
      "Surgery",
      "Emergency"
    ],
    "price": "Consult ₹1,000–1,500",
    "open24": true,
    "placeId": "ChIJY1_cV1kYDTkRBK2U_AEqzww",
    "phone": "+91 99111 16896",
    "phoneSource": "Google",
    "website": "https://www.skrdvet.com/"
  },
  {
    "id": "pet-chikitsa",
    "type": "vet",
    "name": "Pet Chikitsa Veterinary Hospital",
    "area": "Sector 46",
    "address": "Clinic-2, behind HUDA Shopping Complex, Huda Colony, Sector 46, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4337001,
    "lng": 77.0589952,
    "rating": 4.8,
    "reviews": 2255,
    "ratingSource": "Google",
    "tags": [
      "Hospital",
      "Emergency"
    ],
    "open24": true,
    "placeId": "ChIJ7yV_BegYDTkR0bLNd1WAoEY",
    "phone": "+91 73030 22201",
    "phoneSource": "Google",
    "website": "https://www.petchikitsa.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp"
  },
  {
    "id": "elite-vets",
    "type": "vet",
    "name": "The Élite Vets Advanced Petcare",
    "area": "Sector 45",
    "address": "Ground Floor & Basement, Huda Market, DSS 107 & 108, Block C, Uday Nagar, Sector 45, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4428298,
    "lng": 77.06697299999999,
    "rating": 4.9,
    "reviews": 467,
    "ratingSource": "Google",
    "tags": [
      "Advanced care",
      "Diagnostics"
    ],
    "open24": true,
    "placeId": "ChIJqwae9JwZDTkRWO6WXMl2Lxs",
    "phone": "+91 92663 95550",
    "phoneSource": "Google",
    "website": "http://www.theelitevets.in/"
  },
  {
    "id": "vetic-45",
    "type": "vet",
    "name": "Vetic Pet Clinic Sec-45 Gurgaon",
    "area": "Sector 45",
    "address": "Plot No. - 675/778, Captain Ganpat Ram Yadav Marg, near Arihant Hospital, Sector 45, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4440701,
    "lng": 77.0737406,
    "rating": 4.5,
    "reviews": 1125,
    "ratingSource": "Google",
    "tags": [
      "24x7",
      "Emergency",
      "Lab tests"
    ],
    "phone": "+91 87500 33894",
    "phoneSource": "Google",
    "open24": true,
    "placeId": "ChIJkaiaRDkZDTkRvuC4TOQgPOQ",
    "website": "https://vetic.in/clinics/gurgaon/sector-45?utm_source=organic"
  },
  {
    "id": "vetic-gcr",
    "type": "vet",
    "name": "Vetic Pet Clinic — Golf Course Road",
    "area": "Sector 43",
    "address": "Metro Station, 592, near Golf Course Road, Sector 43, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.4572924,
    "lng": 77.09649329999999,
    "rating": 4.6,
    "reviews": 808,
    "tags": [
      "Blood tests",
      "Imaging"
    ],
    "price": "Consult from ₹799",
    "phone": "+91 98739 86483",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJ83EeFRsZDTkRj99epp0c0XU",
    "ratingSource": "Google",
    "website": "https://vetic.in/clinics/gurgaon/golf-course-road?utm_source=organic"
  },
  {
    "id": "vetic-galleria",
    "type": "vet",
    "name": "Vetic Pet Clinic Galleria Gurgaon",
    "area": "DLF Phase 4",
    "address": "Plot No -1601, Abha Rd, near Galleria Boulevard, Sector 28, DLF City IV, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.4692278,
    "lng": 77.0829777,
    "rating": 4.6,
    "reviews": 402,
    "tags": [
      "Clinic",
      "Vaccination"
    ],
    "phone": "+91 89290 14584",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJL63ufGIZDTkRoexsoEDcg9M",
    "ratingSource": "Google",
    "website": "https://vetic.in/clinics/gurgaon/galleria-market?utm_source=organic"
  },
  {
    "id": "pet-care-surgery",
    "type": "vet",
    "name": "Dr. Synghal Pet Care & Surgery LLP",
    "area": "DLF Phase 4",
    "address": "H.No.7316, DLF City, behind Supermart 2, Block C2, DLF Phase IV, Sector 43, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.461296599999997,
    "lng": 77.088461,
    "rating": 4.4,
    "reviews": 394,
    "ratingSource": "Google",
    "tags": [
      "Surgery",
      "Clinic"
    ],
    "price": "Consult ₹600",
    "open24": false,
    "placeId": "ChIJ4RLm59wYDTkRp21_Eo3Br_8",
    "phone": "+91 124 404 7047",
    "phoneSource": "Google",
    "website": "https://www.getpetcare.in/"
  },
  {
    "id": "dr-ruhil",
    "type": "vet",
    "name": "Dr. Ruhil's Pet Clinic",
    "area": "South City 2",
    "address": "C392+CV2, South City II, Sector 49, Fatehpur, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.418511499999997,
    "lng": 77.0521387,
    "rating": 4.4,
    "reviews": 66,
    "ratingSource": "Google",
    "tags": [
      "Clinic",
      "Vaccination"
    ],
    "price": "Consult ₹600",
    "open24": false,
    "placeId": "ChIJc9Qs2j8jDTkRE59bYhRk69Q",
    "phone": "+91 98919 14530",
    "phoneSource": "Google"
  },
  {
    "id": "cgs",
    "type": "vet",
    "name": "CGS Veterinary Hospital",
    "area": "DLF Phase 3",
    "address": "Site No. 2204, S-25, Garden Estate, DLF Phase 3, Sector 24, Gurugram, Haryana 122010, India",
    "pincode": "122010",
    "lat": 28.4846273,
    "lng": 77.1034402,
    "rating": 4.2,
    "reviews": 2717,
    "tags": [
      "Hospital",
      "Night emergency"
    ],
    "open24": true,
    "placeId": "ChIJYxJuxdIeDTkRe9C_Fz3fdqI",
    "ratingSource": "Google",
    "phone": "+91 93110 14490",
    "phoneSource": "Google",
    "website": "https://www.cgshospital.com/"
  },
  {
    "id": "cp-vet",
    "type": "vet",
    "name": "CP Vet Sushant Lok",
    "area": "Sushant Lok 1",
    "address": "Centre Point Pet Hospital Private Limited, CP Vet (सीपी वेट, Bestech Centre Point, Block A, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.4684864,
    "lng": 77.0747081,
    "rating": 4,
    "reviews": 438,
    "ratingSource": "Google",
    "tags": [
      "24x7",
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJWzQ5buEYDTkRR69t9W0DN_8",
    "phone": "+91 99582 20651",
    "phoneSource": "Google",
    "website": "http://cpvet.in/"
  },
  {
    "id": "chhillar",
    "type": "vet",
    "name": "Dr. S. Chhillar Pet Clinic",
    "area": "DLF Phase 1",
    "address": "LB-15, DLF Qutab Plaza, DLF Phase 1, Gurugram, Haryana",
    "pincode": "122002",
    "lat": 28.4706,
    "lng": 77.1003,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "open24": false
  },
  {
    "id": "dlf-pet-clinic",
    "type": "vet",
    "name": "DLF Pet Clinic",
    "area": "DLF Phase 1",
    "address": "L 2, DLF, Qutab Plz Rd, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002, India",
    "pincode": "122002",
    "lat": 28.472042799999997,
    "lng": 77.1023555,
    "rating": 4.1,
    "reviews": 141,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJFSXU6NIYDTkRwcVPpY-Gv5o",
    "ratingSource": "Google",
    "phone": "+91 124 235 2009",
    "phoneSource": "Google"
  },
  {
    "id": "pets-detective",
    "type": "vet",
    "name": "Pets Detective",
    "area": "DLF Phase 1",
    "address": "H-36/28, DLF City Phase 1, Gurugram, Haryana",
    "pincode": "122002",
    "lat": 28.4728,
    "lng": 77.0975,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic",
      "Affordable"
    ],
    "price": "Consult ₹300",
    "open24": false
  },
  {
    "id": "canwad",
    "type": "vet",
    "name": "Canwad Dogs & Cats Clinic",
    "area": "Sector 14",
    "address": "Shop no. 57, Huda Market, Mehrauli Rd, DLF Colony, Sector 14, Gurugram, Haryana 122007, India",
    "pincode": "122007",
    "lat": 28.473136999999998,
    "lng": 77.0485357,
    "rating": 4.1,
    "reviews": 113,
    "tags": [
      "Dogs & cats",
      "Open all week"
    ],
    "open24": false,
    "placeId": "ChIJYZfkdawZDTkR1xem5qryVrw",
    "ratingSource": "Google",
    "phone": "+91 98102 25681",
    "phoneSource": "Google"
  },
  {
    "id": "josan-23",
    "type": "vet",
    "name": "Metro Pet Hospital New Dr Satbir Josan",
    "area": "Sector 23",
    "address": "S.C.O. 18, HUDA Market, near Mother Dairy & Axis Bank, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.5105881,
    "lng": 77.04926069999999,
    "rating": 4.9,
    "reviews": 15,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJxTEBXikZDTkRN8tKzKIiRnY",
    "ratingSource": "Google",
    "phone": "+91 98102 91453",
    "phoneSource": "Google"
  },
  {
    "id": "metro-pet",
    "type": "vet",
    "name": "Metro Pet Hospital",
    "area": "Sector 23",
    "address": "HUDA, Near Mother Dairy, SCO-18, Market, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.5106659,
    "lng": 77.0493326,
    "rating": 4,
    "reviews": 551,
    "ratingSource": "Google",
    "tags": [
      "Hospital"
    ],
    "price": "Consult ₹800",
    "open24": false,
    "placeId": "ChIJg7hRi4YZDTkRUaTPqfDU_24",
    "phone": "+91 98102 91453",
    "phoneSource": "Google"
  },
  {
    "id": "dcc",
    "type": "vet",
    "name": "DCC Animal Hospital Grooming & Boarding",
    "area": "Sector 23A",
    "address": "Jagdamba Farm, Carterpuri Marg, Cartarpuri Alias Daulatpur Nas, Sector 23A, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.500971699999997,
    "lng": 77.05239859999999,
    "rating": 4.6,
    "reviews": 689,
    "tags": [
      "Hospital",
      "Grooming",
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJYyUkRZwZDTkR0Hw8IT1lE_0",
    "ratingSource": "Google",
    "phone": "+91 93115 60101",
    "phoneSource": "Google",
    "website": "http://www.dccpets.in/"
  },
  {
    "id": "josan-care",
    "type": "vet",
    "name": "Josan Petcare Clinic",
    "area": "DLF Phase 4",
    "address": "A-147, Supermart-1, DLF Phase IV, Sector 27, Gurugram, Haryana 122009, India",
    "pincode": "122009",
    "lat": 28.4623921,
    "lng": 77.0874618,
    "rating": 4.3,
    "reviews": 323,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJHQ9_OtsYDTkRR267NMS2Yiw",
    "ratingSource": "Google",
    "phone": "+91 124 427 2684",
    "phoneSource": "Google",
    "website": "http://www.jpcvet.com/contact.html"
  },
  {
    "id": "vet-planet",
    "type": "vet",
    "name": "Vet Planet",
    "area": "DLF Phase 2",
    "address": "5, Bougainvilla Marg, DLF Phase 2, Sector 25, Gurugram, Haryana 122002, India",
    "pincode": "122002",
    "lat": 28.482237899999998,
    "lng": 77.0917549,
    "rating": 4.9,
    "reviews": 416,
    "tags": [
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJLZ6USjsZDTkRrsL9u6h6mHY",
    "ratingSource": "Google",
    "phone": "+91 99116 09095",
    "phoneSource": "Google",
    "website": "http://www.vet-planet.com/"
  },
  {
    "id": "avc",
    "type": "vet",
    "name": "AVC Multispeciality Pet Hospital",
    "area": "Sector 90",
    "address": "Badha, Regal Garden, Hayatpur Rd, near DLF, Sector 90, Gurugram, Haryana 122505, India",
    "pincode": "122505",
    "lat": 28.407361299999998,
    "lng": 76.936308,
    "rating": 4.8,
    "reviews": 725,
    "tags": [
      "Multi-speciality",
      "Emergency"
    ],
    "open24": true,
    "placeId": "ChIJQVtq_QM9DTkR-LiCc55gApg",
    "ratingSource": "Google",
    "phone": "+91 99900 70026",
    "phoneSource": "Google",
    "website": "https://avcpethospital.com/"
  },
  {
    "id": "cessna",
    "type": "vet",
    "name": "Cessna Lifeline Veterinary Hospital, Gurugram",
    "area": "Sector 45",
    "address": "No:- 25-P, near Iskcon Temple, Block C, Uday Nagar, Sector 45, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4397539,
    "lng": 77.0639865,
    "rating": 4.8,
    "reviews": 1884,
    "tags": [
      "Hospital",
      "24 hours"
    ],
    "open24": true,
    "placeId": "ChIJOWwv4XoYDTkRLHOJlVkZhe8",
    "ratingSource": "Google",
    "phone": "+91 76763 65365",
    "phoneSource": "Google",
    "website": "https://www.cessnalifeline.com/"
  },
  {
    "id": "vetlyf",
    "type": "vet",
    "name": "Vetlyf Pet Clinic",
    "area": "Sector 89",
    "address": "Sector 89, Gurugram Towards M3M Solitude Beside Shree Shyam Fuel Point 3 Mins from Elan Miracle Mall, Gurugram, Haryana 122505, India",
    "pincode": "122505",
    "lat": 28.4132143,
    "lng": 76.9539707,
    "rating": 4.9,
    "reviews": 154,
    "tags": [
      "Clinic"
    ],
    "phone": "+91 70529 25038",
    "phoneSource": "Google",
    "open24": true,
    "placeId": "ChIJ97dkuTw9DTkRrHjVAUbyAFY",
    "ratingSource": "Google",
    "website": "http://www.vetlyf.com/"
  },
  {
    "id": "k9-paradise",
    "type": "boarding",
    "name": "The k9 paradise",
    "area": "Sector 68",
    "address": "vill, Plot no - 205, Nurpur Jharsa Rd, near Pareena Micasa, Sector 68, Gurugram, Nurpur Jharsa, Haryana 122101, India",
    "pincode": "122101",
    "lat": 28.385552699999998,
    "lng": 77.0399703,
    "rating": 4.9,
    "reviews": 140,
    "tags": [
      "Boarding",
      "Spa & grooming"
    ],
    "open24": true,
    "placeId": "ChIJH_1Dtu4jDTkRKZGmWRZtatI",
    "ratingSource": "Google",
    "phone": "+91 98916 02676",
    "phoneSource": "Google",
    "website": "http://www.thek9paradise.in/"
  },
  {
    "id": "aravali-kennel",
    "type": "boarding",
    "name": "Aravali Kennel Zone",
    "area": "Sector 68",
    "address": "On Tikli, road, near Urban Nature farm, Badshahpur, Sector 68, Garat Pur Bas, Gurugram, Haryana 122101, India",
    "pincode": "122101",
    "lat": 28.3352059,
    "lng": 77.0166211,
    "rating": 4.8,
    "reviews": 218,
    "tags": [
      "Kennel",
      "Photo updates"
    ],
    "open24": true,
    "placeId": "ChIJ8ekCkPAiDTkRppv_5pJu1-4",
    "ratingSource": "Google",
    "phone": "+91 98216 86029",
    "phoneSource": "Google",
    "website": "http://aravalikennelzone.com/"
  },
  {
    "id": "kaahu",
    "type": "boarding",
    "name": "Kaahu Pet Boarding & More",
    "area": "Sector 68",
    "address": "Khewat No.1843, Killa Number 15, Badshahpur, Sector 68, Gurugram, Haryana 122101, India",
    "pincode": "122101",
    "lat": 28.381383999999997,
    "lng": 77.0482092,
    "rating": 4.3,
    "reviews": 50,
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJLZiNABwjDTkRMubY4p4iaI8",
    "ratingSource": "Google",
    "phone": "+91 93113 83677",
    "phoneSource": "Google"
  },
  {
    "id": "pooch-resort",
    "type": "boarding",
    "name": "Pooch Pet Resort",
    "area": "Sector 62",
    "address": "Kila No. 19, near Paras Trinity, Sector 62, Nangli Umarpur, Gurugram, Haryana 122098, India",
    "pincode": "122098",
    "lat": 28.406588,
    "lng": 77.08473939999999,
    "rating": 4.9,
    "reviews": 299,
    "tags": [
      "Pet resort"
    ],
    "open24": false,
    "placeId": "ChIJy9HvUQcjDTkRqSGSj8MqY0c",
    "ratingSource": "Google",
    "phone": "+91 70650 00256",
    "phoneSource": "Google",
    "website": "https://poochpetresort.com/"
  },
  {
    "id": "chirps-whistle",
    "type": "boarding",
    "name": "Chirps & Whistle Pet Shop & Boarding Kennel",
    "area": "Sector 109",
    "address": "chirps & Whistle, in surya estate Farm, Dwarka Expy, Sector 109, Gurugram, Haryana 122006, India",
    "pincode": "122006",
    "lat": 28.5131397,
    "lng": 77.0090336,
    "rating": 4.8,
    "reviews": 1263,
    "tags": [
      "Farm boarding"
    ],
    "open24": false,
    "placeId": "ChIJhxiO_zERDTkRTMpGZ438ugc",
    "ratingSource": "Google",
    "phone": "+91 81782 57514",
    "phoneSource": "Google",
    "website": "https://www.chirpsandwhistle.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing&utm_content=website_button"
  },
  {
    "id": "tutus-place",
    "type": "boarding",
    "name": "Tutu's Place",
    "area": "Sector 95",
    "address": "B-1407, ROF Ananda, Tower B, Sector 95, Gurugram, Haryana",
    "pincode": "122505",
    "lat": 28.4052,
    "lng": 76.9301,
    "rating": null,
    "reviews": null,
    "tags": [
      "Home boarding"
    ],
    "open24": false
  },
  {
    "id": "bark-n-stay",
    "type": "boarding",
    "name": "Bark ‘N Stay",
    "area": "Sector 46",
    "address": "near Old Banjara market, Darbaripur, Sector 75, Gurugram, Haryana 122101, India",
    "pincode": "122101",
    "lat": 28.387487000000004,
    "lng": 77.01078940000001,
    "rating": 4.9,
    "reviews": 136,
    "tags": [
      "Cage-free",
      "Home daycare",
      "3–4 dogs only"
    ],
    "open24": false,
    "placeId": "ChIJacZXBqIZDTkR9Q4lCFseVJY",
    "ratingSource": "Google",
    "phone": "+91 78273 48886",
    "phoneSource": "Google",
    "website": "https://barknstay.in/"
  },
  {
    "id": "orchid-petals",
    "type": "boarding",
    "name": "Orchid Petals",
    "area": "Sector 49",
    "address": "Orchid Petals, Sector 49, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.4141482,
    "lng": 77.0470916,
    "rating": null,
    "reviews": null,
    "tags": [
      "Daycare",
      "Grooming",
      "Training"
    ],
    "open24": false,
    "placeId": "ChIJ992_uIQiDTkRlNM8tcKpgQs"
  },
  {
    "id": "woofpack",
    "type": "boarding",
    "name": "Woofpack Home Boarding",
    "area": "Sector 67",
    "address": "Ansal Esencia, Sector 67, Gurugram, Haryana",
    "pincode": "122101",
    "lat": 28.3882,
    "lng": 77.0712,
    "rating": null,
    "reviews": null,
    "tags": [
      "Home boarding"
    ],
    "open24": false
  },
  {
    "id": "pet-inn",
    "type": "boarding",
    "name": "Pet Inn",
    "area": "Nirvana Country",
    "address": "Nirvana Country, Sector 50, Gurugram, Haryana",
    "pincode": "122018",
    "lat": 28.4161,
    "lng": 77.0642,
    "rating": null,
    "reviews": null,
    "tags": [
      "Home boarding",
      "Budget"
    ],
    "price": "From ₹300 / night",
    "open24": false
  },
  {
    "id": "doggos-heaven",
    "type": "boarding",
    "name": "Doggos Heaven",
    "area": "Sector 83",
    "address": "Block J, VATIKA INDIA NEXT, Plot 11, near Vatika V'lante, Sector 83, Gurugram, Haryana 122012, India",
    "pincode": "122012",
    "lat": 28.390979599999998,
    "lng": 76.97261480000002,
    "rating": 4.6,
    "reviews": 204,
    "tags": [
      "Boarding",
      "Open 24 hours"
    ],
    "open24": true,
    "placeId": "ChIJq2asOgA9DTkRT7xMW3jdpjI",
    "ratingSource": "Google",
    "phone": "+91 84484 61071",
    "phoneSource": "Google",
    "website": "http://www.doggosheaven.com/"
  },
  {
    "id": "explorer-pet",
    "type": "boarding",
    "name": "Explorer Pet Boarding",
    "area": "Sector 43",
    "address": "Sector 43, Gurugram, Haryana",
    "pincode": "122009",
    "lat": 28.4561,
    "lng": 77.0879,
    "rating": null,
    "reviews": 20,
    "ratingSource": "PetBacker",
    "tags": [
      "Home boarding"
    ],
    "open24": false
  },
  {
    "id": "pets-at-home",
    "type": "boarding",
    "name": "Pet's At Home",
    "area": "Ardee City",
    "address": "1557A, Ardee City Gate Number 2 Rd, Housing Board Colony, Wazirabad, Sector 52, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4388585,
    "lng": 77.0828518,
    "rating": 4.8,
    "reviews": 88,
    "tags": [
      "Home boarding"
    ],
    "open24": false,
    "placeId": "ChIJuxiXyHYZDTkRpzPnGYPCmMU",
    "ratingSource": "Google",
    "phone": "+91 87430 31053",
    "phoneSource": "Google"
  },
  {
    "id": "petzovia",
    "type": "boarding",
    "name": "Petzovia",
    "area": "Sector 70A",
    "address": "Petzovia, Plot No. 6, Sakatpur Rd, near ND Mahadev Gas Agency, Sector 70A, Gurugram, Haryana 122101, India",
    "pincode": "122101",
    "lat": 28.372729699999997,
    "lng": 77.022459,
    "rating": 4.9,
    "reviews": 127,
    "tags": [
      "Pet resort",
      "Budget"
    ],
    "price": "From ₹299 / night",
    "open24": false,
    "placeId": "ChIJg6J-9fUjDTkR2OzomgFerUA",
    "ratingSource": "Google",
    "phone": "+91 83686 11207",
    "phoneSource": "Google",
    "website": "http://www.petzovia.in/"
  },
  {
    "id": "cherrys",
    "type": "boarding",
    "name": "Cherry's Pet Boarding",
    "area": "Palam Vihar",
    "address": "C2, Palam Vihar, Sector 3, Gurugram, Haryana",
    "pincode": "122017",
    "lat": 28.5101,
    "lng": 77.0352,
    "rating": null,
    "reviews": 8,
    "ratingSource": "PetBacker",
    "tags": [
      "Home boarding",
      "Photo updates"
    ],
    "price": "From ₹700 / night",
    "open24": false
  },
  {
    "id": "colonels-farm",
    "type": "boarding",
    "name": "Colonel's Farm",
    "area": "Aravali Retreat",
    "address": "Devinder Vihar, Sector 56, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.428182099999997,
    "lng": 77.0940335,
    "rating": 4.8,
    "reviews": 145,
    "tags": [
      "Farm boarding",
      "Food included"
    ],
    "price": "From ₹800 / night",
    "open24": true,
    "placeId": "ChIJSVTx4bhgICIRK2GF0fmBMO0",
    "ratingSource": "Google",
    "phone": "+91 98739 19341",
    "phoneSource": "Google",
    "website": "https://www.colonelsfarm.in/"
  },
  {
    "id": "pet-grooming-studio",
    "type": "boarding",
    "name": "Pet Grooming Studio- Pet grooming at Home",
    "area": "Sector 48",
    "address": "Unit no 09 , Ground Floor, Jmd Galleria Mall, Badshahpur Sohna Rd, Sector 48, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.4209863,
    "lng": 77.0381941,
    "rating": 4.9,
    "reviews": 219,
    "tags": [
      "Grooming",
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJdXdvKlcjDTkRHGiv3wypL8Q",
    "ratingSource": "Google",
    "phone": "+91 99992 28232",
    "phoneSource": "Google",
    "website": "https://gurgaon.petgroomingstudio.in/book-now"
  },
  {
    "id": "fur-ball-story",
    "type": "boarding",
    "name": "Fur Ball Story",
    "area": "Sector 50",
    "address": "107, Unitech Business Zone, Nirvana Country, Sector 50, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.413503799999997,
    "lng": 77.072096,
    "rating": 4.3,
    "reviews": 890,
    "tags": [
      "Boarding",
      "Pet cafe"
    ],
    "open24": false,
    "placeId": "ChIJbQU38lIfDTkRw0cmIK1puDg",
    "ratingSource": "Google",
    "phone": "+91 95601 06752",
    "phoneSource": "Google",
    "website": "http://furballstory.com/"
  },
  {
    "id": "ms-happy-pet",
    "type": "boarding",
    "name": "MS Dog Training and boarding house",
    "area": "Sector 22",
    "address": "House 50, 3, street 5, est, Ashok Vihar Phase III Extension, Gurugram, Haryana 122006, India",
    "pincode": "122006",
    "lat": 28.489717,
    "lng": 77.026631,
    "rating": 4.9,
    "reviews": 783,
    "tags": [
      "Boarding",
      "Training",
      "Dogs & cats"
    ],
    "open24": false,
    "placeId": "ChIJg85MYHwZDTkReDyJEGWM7dA",
    "ratingSource": "Google",
    "phone": "+91 98111 30059",
    "phoneSource": "Google",
    "website": "https://mshappypet.in/"
  },
  {
    "id": "happy-pet-resort",
    "type": "boarding",
    "name": "The Happy Pet Resort",
    "area": "New Palam Vihar",
    "address": "Mahadev Farm, U-52, Distt, New Palam Vihar Phase 2, Sector 109, Gurugram, Haryana 122006, India",
    "pincode": "122006",
    "lat": 28.5062462,
    "lng": 77.00489420000001,
    "rating": 4.6,
    "reviews": 67,
    "tags": [
      "Pet resort",
      "24/7",
      "Custom meals"
    ],
    "open24": true,
    "placeId": "ChIJkT34tZAbDTkReW6gehh5MnA",
    "ratingSource": "Google",
    "phone": "+91 93110 19103",
    "phoneSource": "Google",
    "website": "https://thehappypetresort.com/"
  },
  {
    "id": "alfa-11",
    "type": "boarding",
    "name": "Alfa 11 Canine Academia",
    "area": "Palam Farms",
    "address": "Palam Farms, Gurugram, Haryana",
    "pincode": "122017",
    "lat": 28.5148,
    "lng": 77.0702,
    "rating": null,
    "reviews": null,
    "tags": [
      "Farm boarding",
      "Behaviour experts"
    ],
    "phone": "+91 98109 64472",
    "phoneSource": "magicpin",
    "open24": false
  },
  {
    "id": "vetic-57",
    "type": "vet",
    "name": "Vetic Pet Clinic Sec-57 Gurgaon",
    "area": "Sector 57",
    "address": "Plot No. 3507P, near Boom Plaza, Block G, Block H, Sector 57, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4251068,
    "lng": 77.0768027,
    "rating": 4.7,
    "reviews": 913,
    "tags": [
      "Clinic",
      "Lab tests"
    ],
    "phone": "+91 89290 50054",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJc95-xucjDTkR59sYvaF_Ix8",
    "ratingSource": "Google",
    "website": "https://vetic.in/clinics/gurgaon/sector-57?utm_source=organic"
  },
  {
    "id": "vetic-sohna",
    "type": "vet",
    "name": "Vetic Pet Clinic Sohna Rd Gurgaon",
    "area": "Sector 47",
    "address": "Shop No. 18,19,20,21, Spaze Boulevard, Badshahpur Sohna Rd, near by Puma Store, Malibu Towne, Sector 47, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.4181295,
    "lng": 77.0409753,
    "rating": 4.6,
    "reviews": 1044,
    "tags": [
      "Clinic",
      "Vaccination"
    ],
    "phone": "+91 89290 09134",
    "phoneSource": "Google",
    "open24": true,
    "placeId": "ChIJB-yd_XcjDTkRTiOey_v7wxo",
    "ratingSource": "Google",
    "website": "https://vetic.in/clinics/gurgaon/sohna-road?utm_source=organic"
  },
  {
    "id": "vetic-82a",
    "type": "vet",
    "name": "Vetic Pet Clinic — Sector 82A",
    "area": "Sector 82A",
    "address": "14, Ground Floor, Vatika Market Walk, Sector 82A, Gurugram, Haryana",
    "pincode": "122004",
    "lat": 28.3921,
    "lng": 76.9641,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic",
      "Diagnostics"
    ],
    "phone": "+91 89290 43121",
    "phoneSource": "Vetic",
    "open24": false
  },
  {
    "id": "vetic-15",
    "type": "vet",
    "name": "Vetic Pet Clinic — Sector 15",
    "area": "Sector 15",
    "address": "SCO-30, HUDA Market, Sector 15 Part 2, Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4598,
    "lng": 77.0391,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "phone": "+91 89290 43121",
    "phoneSource": "Vetic",
    "open24": false
  },
  {
    "id": "asha-holistic",
    "type": "vet",
    "name": "Asha Holistic Pet Care",
    "area": "South City 2",
    "address": "Plot no 145, Block C, South City II, Sector 49, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.4175717,
    "lng": 77.05284840000002,
    "rating": 4.9,
    "reviews": 117,
    "ratingSource": "Google",
    "tags": [
      "Multi-speciality",
      "24x7"
    ],
    "price": "Consult ₹650",
    "open24": true,
    "placeId": "ChIJ_5S7QeIjDTkRJlb7Da_0PUI",
    "phone": "+91 70700 97676",
    "phoneSource": "Google",
    "website": "https://ashaholistic.life/?utm_source=google&utm_medium=business_profile&utm_campaign=main_link_to_website_localo"
  },
  {
    "id": "pet-well",
    "type": "vet",
    "name": "Dr Sristi Pet Well Clinic & Hospital",
    "area": "South City 2",
    "address": "Lower Ground - 06, 07 & 08, Chestnut St, next to Park Hospital, Malibu Towne, Sector 47, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.419964,
    "lng": 77.0474611,
    "rating": 4.4,
    "reviews": 1013,
    "ratingSource": "Google",
    "tags": [
      "Multi-speciality",
      "24x7"
    ],
    "price": "Consult ₹500",
    "open24": true,
    "placeId": "ChIJAUXEBYMiDTkRt9Wbg3ArRWE",
    "phone": "+91 97178 84108",
    "phoneSource": "Google",
    "website": "https://drsristipetwellhospital.com/"
  },
  {
    "id": "happy-paws",
    "type": "vet",
    "name": "HAPPY PAWS PET CLINIC",
    "area": "Badshahpur",
    "address": "D-120, 1st floor, Rodeo Drive Vikas Marg, Mall, near GOOD EARTH CITY CENTER, South City II, Sector 49, Gurugram, Haryana 122018, India",
    "pincode": "122018",
    "lat": 28.4200828,
    "lng": 77.051942,
    "rating": 4.8,
    "reviews": 103,
    "tags": [
      "Clinic",
      "Affordable"
    ],
    "price": "Consult ₹300–500",
    "open24": false,
    "placeId": "ChIJ9zTJvoMiDTkRL2H3Y2h1ijM",
    "ratingSource": "Google",
    "phone": "+91 99113 79399",
    "phoneSource": "Google",
    "website": "https://www.facebook.com/dr.ketakitoley/"
  },
  {
    "id": "vet-4-pet",
    "type": "vet",
    "name": "Vet 4 Pet",
    "area": "Palam Vihar",
    "address": "Palam Vihar, Gurugram, Haryana",
    "pincode": "122017",
    "lat": 28.5079,
    "lng": 77.0329,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic",
      "Affordable"
    ],
    "price": "Consult ₹200",
    "open24": false
  },
  {
    "id": "star-pets",
    "type": "vet",
    "name": "Star Pets | Grooming & Pet Shop",
    "area": "Sector 57",
    "address": "3545B, Dharm Marg, opposite Boom Plaza, Block C, Sushant Lok III, Sector 57, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4226918,
    "lng": 77.0757752,
    "rating": 4.4,
    "reviews": 144,
    "tags": [
      "Clinic",
      "Pet store"
    ],
    "price": "Consult ₹600",
    "open24": false,
    "placeId": "ChIJEwmdT3QiDTkRnuwayCLRSso",
    "ratingSource": "Google",
    "phone": "+91 99719 76487",
    "phoneSource": "Google",
    "website": "https://starpets.in/"
  },
  {
    "id": "pet-n-vet",
    "type": "vet",
    "name": "Pet n Vet care",
    "area": "Sohna",
    "address": "63XC+HV, Baluda Rd, near Mamta hospital, Sohna, Haryana 122103, India",
    "pincode": "122103",
    "lat": 28.2490338,
    "lng": 77.0721483,
    "rating": 4.7,
    "reviews": 105,
    "tags": [
      "Clinic",
      "Affordable"
    ],
    "price": "Consult ₹300",
    "open24": false,
    "placeId": "ChIJFxlNYzklDTkR2jHmki7BV3U",
    "ratingSource": "Google",
    "phone": "+91 98130 76970",
    "phoneSource": "Google",
    "website": "http://petnvet.shop/"
  },
  {
    "id": "animalia",
    "type": "vet",
    "name": "Animalia Veterinary Polyclinic",
    "area": "Sector 47",
    "address": "Plot No. 15P, Service Lane, Sector 47, Gurugram, Haryana",
    "pincode": "122018",
    "lat": 28.4221,
    "lng": 77.0422,
    "rating": 4.5,
    "reviews": 12,
    "ratingSource": "Practo",
    "tags": [
      "Polyclinic"
    ],
    "price": "Consult ₹600",
    "open24": false
  },
  {
    "id": "dr-pooja",
    "type": "vet",
    "name": "Dr.Pooja Pet clinic",
    "area": "Udyog Vihar",
    "address": "House no 1314, near Rezang La Chowk, Cartarpuri Alias Daulatpur Nas, Block F, Carterpuri Village, Sector 23A, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.508215399999997,
    "lng": 77.04598469999999,
    "rating": 4.8,
    "reviews": 227,
    "ratingSource": "Google",
    "tags": [
      "Clinic",
      "Late hours"
    ],
    "phone": "+91 99908 96949",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJ41nvYKsZDTkRvApovr2cbes",
    "website": "https://www.bringyy.com/"
  },
  {
    "id": "4-paws",
    "type": "vet",
    "name": "4 Paws Pet Clinic",
    "area": "Palam Vihar",
    "address": "G-71, Block C 2, Palam Vihar, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.4970969,
    "lng": 77.0201788,
    "rating": 4.6,
    "reviews": 207,
    "ratingSource": "Google",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ8V5tdIgZDTkR1h-NpSDTzlk",
    "phone": "+91 85275 44310",
    "phoneSource": "Google"
  },
  {
    "id": "bmr",
    "type": "vet",
    "name": "BMR Pet Clinic",
    "area": "Palam Vihar",
    "address": "Palam Vihar, Gurugram, Haryana",
    "pincode": "122017",
    "lat": 28.5071,
    "lng": 77.0341,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "open24": false
  },
  {
    "id": "cp-vet-pv",
    "type": "vet",
    "name": "CP Vet Palam Vihar",
    "area": "Palam Vihar",
    "address": "79, OI, Palam Vyapar Kendra, 46 & 47, Choma, Pocket E, Sector 2, Palam Vihar, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.5087415,
    "lng": 77.0313401,
    "rating": 4.3,
    "reviews": 422,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJY1xohPQZDTkR88D2m2vRvN4",
    "ratingSource": "Google",
    "phone": "+91 97172 37914",
    "phoneSource": "Google",
    "website": "http://cpvet.in/"
  },
  {
    "id": "maxpetz-pv",
    "type": "vet",
    "name": "MaxPetZ Palam Vihar Gurugram",
    "area": "Palam Vihar",
    "address": "580 P, Palam Vihar Rd, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "pincode": "122017",
    "lat": 28.509171199999997,
    "lng": 77.045384,
    "rating": 4.7,
    "reviews": 223,
    "tags": [
      "Surgery",
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJmW7ZhAAbDTkRRougrnu8VjM",
    "ratingSource": "Google",
    "phone": "+91 98103 83815",
    "phoneSource": "Google",
    "website": "https://www.maxpetz.com/location/maxpetz-palam-vihar"
  },
  {
    "id": "maxpetz-sl2",
    "type": "vet",
    "name": "MaxPetZ Gurgaon",
    "area": "Sector 55",
    "address": "A1/218, Sushant Lok 2, Sector 55, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4278572,
    "lng": 77.1056993,
    "rating": 4.4,
    "reviews": 82,
    "tags": [
      "Clinic",
      "Surgery"
    ],
    "open24": false,
    "placeId": "ChIJDwNc0owhDTkRRgmsyYJpMnU",
    "ratingSource": "Google",
    "phone": "+91 98103 93915",
    "phoneSource": "Google",
    "website": "https://www.maxpetz.com/location/maxpetz-gurugram"
  },
  {
    "id": "pet-hospital-shelter",
    "type": "vet",
    "name": "Pet Hospital & Boarding Shelter",
    "area": "Palam Vihar",
    "address": "H-578, Block S, Palam Vihar, Gurugram, Haryana",
    "pincode": "122017",
    "lat": 28.5066,
    "lng": 77.0301,
    "rating": 3.8,
    "reviews": 50,
    "ratingSource": "Justdial",
    "tags": [
      "Hospital",
      "Boarding"
    ],
    "open24": false
  },
  {
    "id": "vatika-pet",
    "type": "vet",
    "name": "Vatika Pet Clinic & Surgery Centre",
    "area": "Sector 82",
    "address": "Plot no 1 E1. 3, VATIKA INDIA NEXT, Sector 82, Gurugram, Haryana 122012, India",
    "pincode": "122012",
    "lat": 28.3932228,
    "lng": 76.9657493,
    "rating": 4.7,
    "reviews": 277,
    "tags": [
      "Clinic",
      "Surgery"
    ],
    "open24": false,
    "placeId": "ChIJAfPOsX89DTkR2QoS2EM4tEo",
    "ratingSource": "Google",
    "phone": "+91 72900 19005",
    "phoneSource": "Google"
  },
  {
    "id": "pet-life",
    "type": "vet",
    "name": "Pet Life Veterinary Hospital",
    "area": "Sector 83",
    "address": "Shop NO. 7, 1, Vatika Rd, Sector 83, Gurugram, Haryana 122012, India",
    "pincode": "122012",
    "lat": 28.402601899999997,
    "lng": 76.9689147,
    "rating": 4.8,
    "reviews": 149,
    "ratingSource": "Google",
    "tags": [
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJnclo85c9DTkRIX2-FNvKc0k",
    "phone": "+91 78378 30800",
    "phoneSource": "Google"
  },
  {
    "id": "furrvana",
    "type": "vet",
    "name": "Furrvana Pet Clinic & Care Center",
    "area": "Sector 84",
    "address": "Lower Ground Floor, Elan Miracle, Unit No 55F/55G, Sector 84, Gurugram, Haryana 122012, India",
    "pincode": "122012",
    "lat": 28.414729299999998,
    "lng": 76.96331239999999,
    "rating": 4.9,
    "reviews": 149,
    "tags": [
      "Vaccination",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJnXQ5bgAXDTkRdVSO5peH33c",
    "ratingSource": "Google",
    "phone": "+91 88261 23438",
    "phoneSource": "Google",
    "website": "http://www.furrvana.co.in/"
  },
  {
    "id": "companion-care",
    "type": "vet",
    "name": "Companion Care Pet Clinic and Diagnostic",
    "area": "Sector 109",
    "address": "Consient One, BG-81, Dwarka Expy, Sector 109, Gurugram, Haryana 122006, India",
    "pincode": "122006",
    "lat": 28.5035407,
    "lng": 77.0069116,
    "rating": 4.5,
    "reviews": 205,
    "ratingSource": "Google",
    "tags": [
      "Diagnostics",
      "Clinic"
    ],
    "phone": "+91 93114 64747",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJqxtMazMXDTkRTpJvhtXg_x4",
    "website": "https://www.companioncarepetclinic.com/"
  },
  {
    "id": "vetopia",
    "type": "vet",
    "name": "Vetopia Pet Clinic & Surgery Centre",
    "area": "Sector 40",
    "address": "shop no.-97, C3X6+93F Huda Market, Block Q, South City I, Sector 40, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4490043,
    "lng": 77.0573739,
    "rating": 4.5,
    "reviews": 142,
    "tags": [
      "Surgery",
      "Late hours"
    ],
    "open24": false,
    "placeId": "ChIJ-2b8n8cZDTkRdNaZUxnN04g",
    "ratingSource": "Google",
    "phone": "+91 74043 46034",
    "phoneSource": "Google"
  },
  {
    "id": "south-city-pet",
    "type": "vet",
    "name": "South City Pet Clinic & Surgery Centre",
    "area": "South City 1",
    "address": "South City 1, Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4602,
    "lng": 77.0602,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic",
      "Surgery"
    ],
    "open24": false
  },
  {
    "id": "dr-soni",
    "type": "vet",
    "name": "Dr. Soni Pet Clinic",
    "area": "Sector 38",
    "address": "Sector 38, Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4401,
    "lng": 77.0451,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "open24": false
  },
  {
    "id": "santosh-pet",
    "type": "vet",
    "name": "Santosh Pet Clinic",
    "area": "Sector 38",
    "address": "Sector 38, Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4412,
    "lng": 77.0472,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "open24": false
  },
  {
    "id": "pets-lifeline",
    "type": "vet",
    "name": "Pet's Lifestyle (Lifeline)",
    "area": "Gurugram",
    "address": "Shop No.5, Pink Town House Market, U-25, 25, opp. AMYRA CLINIC, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122002, India",
    "pincode": "122002",
    "lat": 28.4946007,
    "lng": 77.0995792,
    "rating": 4.9,
    "reviews": 38,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ3YvbuEIZDTkRzAwwHXi2aH0",
    "ratingSource": "Google",
    "phone": "+91 80767 57522",
    "phoneSource": "Google"
  },
  {
    "id": "pets-life-care",
    "type": "vet",
    "name": "Pet's Life Care Clinic",
    "area": "Gurugram",
    "address": "Gurugram, Haryana",
    "pincode": "122001",
    "lat": 28.4462,
    "lng": 77.0425,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic"
    ],
    "open24": false
  },
  {
    "id": "govt-vet",
    "type": "vet",
    "name": "Government Animal Husbandry Hospital",
    "area": "Sector 10A",
    "address": "F224+GPH, Pataudi Rd, Shakti Park Colony, Gandhi Nagar, Sector 10A, Gurugram, Haryana 122001, India",
    "pincode": "122001",
    "lat": 28.451302,
    "lng": 77.00686619999999,
    "rating": 3.9,
    "reviews": 280,
    "tags": [
      "Government",
      "Affordable"
    ],
    "open24": false,
    "placeId": "ChIJJ5Uf_YgXDTkRKEvmUDJj-Tw",
    "ratingSource": "Google"
  },
  {
    "id": "golf-course-vets",
    "type": "vet",
    "name": "Golf Course Vets - Pet Clinic",
    "area": "Golf Course Road",
    "address": "G-30, Central Plaza, Mall, Golf Course Rd, Parsvnath Exotica, DLF Phase 5, Sector 53, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4429709,
    "lng": 77.1009512,
    "rating": 4.3,
    "reviews": 211,
    "tags": [
      "Clinic"
    ],
    "phone": "+91 98110 76332",
    "phoneSource": "Google",
    "open24": false,
    "placeId": "ChIJe2Y8HrMYDTkRfUjeB1wxAFc",
    "ratingSource": "Google",
    "website": "https://golfcoursevets.com/?utm_source=google&utm_medium=business_profile&utm_campaign=main_link_to_website_localo"
  },
  {
    "id": "paws-claws",
    "type": "vet",
    "name": "Paws & Claws",
    "area": "Sector 31",
    "address": "Shop No-14,Mini Huda Market, Shrimati Santhosh Yadav Rd, Sector 31, Gurugram, Haryana 122001, India",
    "pincode": "122001",
    "lat": 28.455028,
    "lng": 77.05581,
    "rating": 4.1,
    "reviews": 267,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJl-uSmlgYDTkRJvBJVI4VmxM",
    "ratingSource": "Google",
    "phone": "+91 99711 91027",
    "phoneSource": "Google",
    "website": "https://paws-and-claws-pet-c-td7e.bolt.host/"
  },
  {
    "id": "truvet",
    "type": "vet",
    "name": "TruVet Pet Care Clinic",
    "area": "Sector 79",
    "address": "Shop No 4-6, opp. Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122012, India",
    "pincode": "122012",
    "lat": 28.3558194,
    "lng": 76.97098799999999,
    "rating": 4.9,
    "reviews": 47,
    "tags": [
      "Dogs & cats",
      "Walk-ins"
    ],
    "open24": false,
    "placeId": "ChIJ4zSPBgA9DTkRUXRkUag8Gc4",
    "ratingSource": "Google",
    "phone": "+91 98710 10355",
    "phoneSource": "Google",
    "website": "https://truvet.in/"
  },
  {
    "id": "ard-pet",
    "type": "vet",
    "name": "Ard Pet Hospital",
    "area": "Sector 56",
    "address": "Plot No. 7P, near Kirti Hospital, Sector 56, Gurugram, Haryana",
    "pincode": "122011",
    "lat": 28.4241,
    "lng": 77.1036,
    "rating": 4.4,
    "reviews": null,
    "ratingSource": "Justdial",
    "tags": [
      "Hospital",
      "24 hours"
    ],
    "open24": true
  },
  {
    "id": "cp-vet-56",
    "type": "vet",
    "name": "CP Vet Sector 56",
    "area": "Sector 56",
    "address": "GF & Basement, SCO-65, Huda Market Rd, behind Jalvayu Tower, Block B, Sector 56, Gurugram, Haryana 122011, India",
    "pincode": "122011",
    "lat": 28.4281237,
    "lng": 77.098702,
    "rating": 4.1,
    "reviews": 481,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJx796nAAiDTkR2dX3djXKGqU",
    "ratingSource": "Google",
    "phone": "+91 95609 52323",
    "phoneSource": "Google",
    "website": "http://cpvet.in/"
  },
  {
    "id": "sjs-pet",
    "type": "vet",
    "name": "SJS Pet Care and Clinic",
    "area": "Gwal Pahari",
    "address": "16-Gf, Paras Trade Centre, Valley View Estate, Gwal Pahari, Gurugram, Bandhwari, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.436854399999998,
    "lng": 77.134653,
    "rating": 4.9,
    "reviews": 2096,
    "tags": [
      "Clinic",
      "24 hours"
    ],
    "open24": true,
    "placeId": "ChIJQ7tDdGMfDTkRgJIGEdXX_gk",
    "ratingSource": "Google",
    "phone": "+91 99710 04223",
    "phoneSource": "Google",
    "website": "https://www.sjspetcare.com/"
  },
  {
    "id": "all-tails",
    "type": "vet",
    "name": "All Tails — All Set For Your Pet",
    "area": "Ardee City",
    "address": "Ardee City, Sector 52, Gurugram, Haryana",
    "pincode": "122003",
    "lat": 28.4391,
    "lng": 77.0791,
    "rating": null,
    "reviews": null,
    "tags": [
      "Clinic",
      "Late hours"
    ],
    "open24": false
  },
  {
    "id": "pet-works",
    "type": "vet",
    "name": "Pet Works",
    "area": "Ardee City",
    "address": "1700- P, Ardee City Gate Number 2 Rd, Housing Board Colony, Wazirabad, Sector 52, Gurugram, Haryana 122003, India",
    "pincode": "122003",
    "lat": 28.4415248,
    "lng": 77.08256639999999,
    "rating": 4.3,
    "reviews": 155,
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ20ZnId0YDTkRiJG8g0Rdvn4",
    "ratingSource": "Google",
    "website": "http://www.petworks.in/"
  },
  {
    "id": "deepet",
    "type": "vet",
    "name": "DeePet Services",
    "area": "Gurugram",
    "address": "Gurugram, Haryana (home visits)",
    "pincode": "122001",
    "lat": 28.4592,
    "lng": 77.0266,
    "rating": null,
    "reviews": null,
    "tags": [
      "Home visits",
      "Vaccination"
    ],
    "open24": false
  },
  {
    "id": "g-7ttszr27ko",
    "type": "vet",
    "name": "Government Veterinary Hospital Kankrola",
    "area": "Gurugram",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJF_7uMR89DTkRX7TtszR27ko",
    "address": "9WRF+FXH, Unnamed Road, Gurugram, Haryana 122505, India",
    "lat": 28.3911765,
    "lng": 76.9249828,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 18,
    "pincode": "122505",
    "phone": "+91 70111 78498",
    "phoneSource": "Google"
  },
  {
    "id": "g-iicuqcnbwe",
    "type": "vet",
    "name": "Paws & Tails Vet Clinic",
    "area": "Sector 82",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJe3gsj8s9DTkR7IicuqCnBWE",
    "address": "51, Ground Floor, Lamp’s Avenue, Vatika Rd, near H-4, Sector 82, Gurugram, Haryana 122012, India",
    "lat": 28.391277400000003,
    "lng": 76.9561679,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 45,
    "pincode": "122012",
    "phone": "+91 88828 45899",
    "phoneSource": "Google",
    "website": "https://pawsandtailsvet.com/"
  },
  {
    "id": "g-rfh7ehuimm",
    "type": "vet",
    "name": "Veterinary Hospital Manesar",
    "area": "Manesar",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJJxUdRQA9DTkRqrFH7ehUimM",
    "address": "Bhishm Mandir gali, Manesar, Gurugram, Haryana 122052, India",
    "lat": 28.3513788,
    "lng": 76.9379586,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 5,
    "pincode": "122052"
  },
  {
    "id": "g-k_o0cac5nk",
    "type": "vet",
    "name": "Dr Upesh",
    "area": "IMT Manesar",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJhRG7G3A9DTkR5K_o0CAc5nk",
    "address": "Sector 1B, IMT Manesar, Gurugram, Haryana 122052, India",
    "lat": 28.347781200000004,
    "lng": 76.9412049,
    "pincode": "122052",
    "phone": "+91 98020 22666",
    "phoneSource": "Google"
  },
  {
    "id": "g-mw2opbfdje",
    "type": "vet",
    "name": "Manesar Pet Hospital",
    "area": "IMT Manesar",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": true,
    "placeId": "ChIJ01bVi189DTkRRMW2opBFdjE",
    "address": "H.No- 169, Sector 1, IMT Manesar, Manesar, Gurugram, Haryana 122052, India",
    "lat": 28.365771799999997,
    "lng": 76.9491608,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 2,
    "pincode": "122052"
  },
  {
    "id": "g-rqkgtgmjxq",
    "type": "vet",
    "name": "Nurture Pet Clinic",
    "area": "Sector 82",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJnT6drfg9DTkRarqKgTgmJxQ",
    "address": "G Block, VATIKA INDIA NEXT, 19, Crescent Dr, Sector 82, Gurugram, Haryana 122012, India",
    "lat": 28.3918847,
    "lng": 76.9588763,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 15,
    "pincode": "122012",
    "phone": "+91 77019 88100",
    "phoneSource": "Google",
    "website": "https://www.instagram.com/nurturepetclinic"
  },
  {
    "id": "g-gbtegea-um",
    "type": "boarding",
    "name": "Bow - Wow Dog Boarding",
    "area": "Sector 82",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJEcPXKwA9DTkRmGBtEgeA-uM",
    "address": "G-4/4, Vatika India Nxt, Sector 82, Gurugram, Haryana 122012, India",
    "lat": 28.3915857,
    "lng": 76.9597457,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 6,
    "pincode": "122012"
  },
  {
    "id": "g-wmv8neodum",
    "type": "boarding",
    "name": "AVC Pet Boarding",
    "area": "Sector 87",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJebzTs6A9DTkRVWMv8NEOduM",
    "address": "9WVJ+CFV, Sector 87, Gurugram, Haryana 122505, India",
    "lat": 28.3936219,
    "lng": 76.9332039,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122505",
    "phone": "+91 82877 76480",
    "phoneSource": "Google",
    "website": "https://avcpetworld.shop/"
  },
  {
    "id": "g-pt9enqxpqo",
    "type": "boarding",
    "name": "Sniffitall",
    "area": "Sector 82",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJRSQyvsc9DTkRDpt9ENQXPqo",
    "address": "House No. 4 Ground Floor, VATIKA INDIA NEXT, Street F3, Sector 82, Gurugram, Haryana 122012, India",
    "lat": 28.3902155,
    "lng": 76.96130980000001,
    "pincode": "122012"
  },
  {
    "id": "g-y7rbixyals",
    "type": "boarding",
    "name": "Gingu-Moto Pet hostel",
    "area": "Sector 86",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJN3epU-k9DTkRvY7rBIxYaLs",
    "address": "Pyramid Urban Homes 2, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.3965664,
    "lng": 76.9486424,
    "pincode": "122012"
  },
  {
    "id": "g-ttujnjkzm4",
    "type": "boarding",
    "name": "LAKSHYA DOG TRAINING HUB",
    "area": "Sector 86",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": false,
    "placeId": "ChIJJT1UieI9DTkRLTTuJnJkzM4",
    "address": "Pyramid Elite, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.3975562,
    "lng": 76.9324944,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 68,
    "pincode": "122012",
    "phone": "+91 96275 73856",
    "phoneSource": "Google",
    "website": "https://lakshya-dog-training.grexa.site/"
  },
  {
    "id": "g-h-clymrivs",
    "type": "vet",
    "name": "Vetic Pet Clinic Sec-82A Gurgaon",
    "area": "Sector 82A",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJj-SogbQ9DTkRAh-cLymriVs",
    "address": "14, GF, Vatika Market Walk, near Sector 82A, Gurugram, Haryana 122012, India",
    "lat": 28.3900574,
    "lng": 76.96559479999999,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 126,
    "pincode": "122012",
    "phone": "+91 98711 53631",
    "phoneSource": "Google",
    "website": "https://vetic.in/clinics/gurgaon/sector-82?utm_source=Organic"
  },
  {
    "id": "g-cmsw_3i29m",
    "type": "vet",
    "name": "Government Animal Hospital",
    "area": "Sector 79",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJJxlByuE8DTkRdcmSw_3i29M",
    "address": "9XCM+3M7, Shikohpur, Sector 79, Shikohpur, Gurugram, Haryana 122012, India",
    "lat": 28.3701593,
    "lng": 76.98418079999999,
    "rating": 3.4,
    "ratingSource": "Google",
    "reviews": 35,
    "pincode": "122012"
  },
  {
    "id": "g-upjpqppo6a",
    "type": "vet",
    "name": "Pawfect Vet Clinic",
    "area": "Sector 83",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ3fScii49DTkR5UPjPqppO6A",
    "address": "Block J, Tower D, VATIKA INDIA NEXT, SCO-11, Vatika Rd, Sector 83, Gurugram, Haryana 122012, India",
    "lat": 28.3912087,
    "lng": 76.9726996,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 9,
    "pincode": "122012",
    "phone": "+91 92113 28368",
    "phoneSource": "Google",
    "website": "http://pawfectvetclinic.com/"
  },
  {
    "id": "g-beyhzrswd0",
    "type": "vet",
    "name": "vet at home",
    "area": "Sector 79",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJCcBtu4A9DTkRMbeYhZRSWd0",
    "address": "Shop no 51, Signature global market, Sector 79, Gurugram, Haryana 122012, India",
    "lat": 28.3623546,
    "lng": 76.97870759999999,
    "pincode": "122012",
    "phone": "+91 98919 09797",
    "phoneSource": "Google",
    "website": "https://vetathomes.in/"
  },
  {
    "id": "g-aum0d0g3iu",
    "type": "vet",
    "name": "Vet at Home by Wag N Wander",
    "area": "Sector 79",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJ2WQ50Y49DTkROaum0D0g3iU",
    "address": "A3, Sector 79, Manesar, Gurugram, Haryana 122012, India",
    "lat": 28.359541,
    "lng": 76.977251,
    "pincode": "122012",
    "website": "https://wagnwanderwellness.com/"
  },
  {
    "id": "g-_3pn8i9k-e",
    "type": "boarding",
    "name": "Woof n Purr",
    "area": "Sector 75",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJNQk4SVoZDTkRe_3Pn8I9k-E",
    "address": "Kila, number 19, Darbaripur, Sector 75, Gurugram, Haryana 122101, India",
    "lat": 28.390392300000002,
    "lng": 77.0066887,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 436,
    "pincode": "122101",
    "phone": "+91 76786 09739",
    "phoneSource": "Google"
  },
  {
    "id": "g-8ggknekeac",
    "type": "boarding",
    "name": "Rocks & Pebbles",
    "area": "Sector 75",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJNXGpvws9DTkRs8ggknEkeAc",
    "address": "Off Southern Periphery Road,Khata 60/61 Village Darbaripur, Badshahpur, Sector 75, Gurugram, Haryana 122101, India",
    "lat": 28.390411099999998,
    "lng": 77.00470299999999,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 262,
    "pincode": "122101",
    "phone": "+91 98181 84084",
    "phoneSource": "Google",
    "website": "https://www.rocksandpebblesdogpark.com/"
  },
  {
    "id": "g-0drhpxb7-4",
    "type": "boarding",
    "name": "House of Howl",
    "area": "Sector 78",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ7ftsW0MjDTkR10DrhPxb7-4",
    "address": "Hemkaran Farm Plot, opposite DLF Privanna, Shikohpur, Sector 78, Gurugram, Haryana 122012, India",
    "lat": 28.374790299999997,
    "lng": 76.9889189,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 103,
    "pincode": "122012",
    "phone": "+91 88004 74705",
    "phoneSource": "Google",
    "website": "https://book.houseofhowl.in/"
  },
  {
    "id": "g-bf0qv4_tnu",
    "type": "boarding",
    "name": "Barks and Meows- Pet Boarding Service",
    "area": "Hasanpur",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJCXdnGco9DTkRZbF0qV4_TNU",
    "address": "near sector 70A, Hasanpur, Gurugram, Haryana 122101, India",
    "lat": 28.3814969,
    "lng": 77.00948629999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 45,
    "pincode": "122101",
    "phone": "+91 88517 74028",
    "phoneSource": "Google",
    "website": "http://www.barksandmeows.in/"
  },
  {
    "id": "g-gk22xyh1eo",
    "type": "boarding",
    "name": "Sammy Pet Boarding",
    "area": "Sector 70A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ67dhKHg9DTkRQgK22xyH1eo",
    "address": "Bokan Farm 2019, Leopard trail road, near Harmony Equiterian Center, Sector 70A, Hasanpur, Gurugram, Haryana 122101, India",
    "lat": 28.378358199999997,
    "lng": 77.0037148,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 43,
    "pincode": "122101",
    "phone": "+91 88266 32753",
    "phoneSource": "Google",
    "website": "https://www.sammypetboarding.com/"
  },
  {
    "id": "g-3f0b-uxxq8",
    "type": "boarding",
    "name": "Rabesa- The Gentle Paw",
    "area": "Gurugram",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJp0n5CGA9DTkRw3f0b-UxxQ8",
    "address": "Gaon, Hasanpur, Gurugram, Haryana 122101, India",
    "lat": 28.3851783,
    "lng": 77.000529,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122101"
  },
  {
    "id": "g-rcv6kvtr-k",
    "type": "boarding",
    "name": "Tails and Trails",
    "area": "Gurugram",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJrbz9mgE9DTkRjRCV6KVtr-k",
    "address": "Hasanpur Rd, Gurugram, Haryana 122101, India",
    "lat": 28.3777783,
    "lng": 77.00971539999999,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 9,
    "pincode": "122101",
    "website": "https://thetailsandtrails.com/"
  },
  {
    "id": "g-qmr7tle5bk",
    "type": "vet",
    "name": "Petriever",
    "area": "Sector 70",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJTQqm4yAjDTkR0QmR7tle5bk",
    "address": "Shop No B015, Ground Floor, 70Grand Walk Tapasya, B016, Sector 70, Gurugram, Haryana 122101, India",
    "lat": 28.389956599999998,
    "lng": 77.03057249999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 72,
    "pincode": "122101",
    "phone": "+91 92662 07788",
    "phoneSource": "Google",
    "website": "https://petriever.com/"
  },
  {
    "id": "g-smrci5pd5k",
    "type": "vet",
    "name": "PAWSITIVE VETERINARY HOSPITAL",
    "area": "Sector 69",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJTxWDm9kjDTkRDsmRci5Pd5k",
    "address": "Shop no. LG- 01, Lower Ground, opposite Elan Epic Mall, near by Tulip Voilet Society, Tulip Violet Society, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.391865,
    "lng": 77.0313571,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 38,
    "pincode": "122101",
    "phone": "+91 79822 66200",
    "phoneSource": "Google"
  },
  {
    "id": "g-msesarb3nk",
    "type": "vet",
    "name": "VetScope Diagnostics",
    "area": "Sector 69",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ43zaXFojDTkRdMSesarb3Nk",
    "address": "Unit no. 132 First Floor, Spaze Corporate Parkk, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.3948476,
    "lng": 77.0318647,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 46,
    "pincode": "122101",
    "phone": "+91 88002 79766",
    "phoneSource": "Google",
    "website": "https://www.vetscope.in/"
  },
  {
    "id": "g-zee5mlm4b0",
    "type": "vet",
    "name": "Dr Chawla's Pet Clinic",
    "area": "Sector 69",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJrf3vaeQjDTkRazEE5mLM4B0",
    "address": "shop no 1, near Tulip Violet Society, Tulip Violet Society, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.391879699999997,
    "lng": 77.03136789999999,
    "rating": 3.7,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122101"
  },
  {
    "id": "g-cy1067q4x4",
    "type": "boarding",
    "name": "Elsa’s Dog Park & Cakery",
    "area": "road",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJhw9xlfwjDTkRTCY1067q4x4",
    "address": "112, mustil 3/2, near Tapasya mall, road, Palda Dhaani, Gurugram, Haryana 122101, India",
    "lat": 28.3888374,
    "lng": 77.0297424,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 160,
    "pincode": "122101",
    "phone": "+91 98183 17307",
    "phoneSource": "Google",
    "website": "http://www.elsasdogpark.com/"
  },
  {
    "id": "g-bryjtxqgje",
    "type": "boarding",
    "name": "Smokie's Pet Play Home",
    "area": "Sector 68",
    "tags": [
      "Boarding",
      "Home boarding"
    ],
    "open24": false,
    "placeId": "ChIJGbIoSjUjDTkRPbrYjTxqgJE",
    "address": "Sector 68, Gurugram, Haryana 122101, India",
    "lat": 28.374737699999997,
    "lng": 77.04363359999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122101",
    "website": "https://www.facebook.com/smokiepetplayhome/"
  },
  {
    "id": "g-g5d-njexgu",
    "type": "boarding",
    "name": "Browny Boxy",
    "area": "Sector 70",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJx3sBZSYjDTkR4g5D-NjeXgU",
    "address": "next to Gpl Eden Heights, Sector 70, Gurugram, Haryana 122101, India",
    "lat": 28.393007899999997,
    "lng": 77.020612,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 259,
    "pincode": "122101",
    "phone": "+91 99711 10272",
    "phoneSource": "Google"
  },
  {
    "id": "g-uxnpryx5hc",
    "type": "boarding",
    "name": "Leash And Latte",
    "area": "Sector 68",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJP_VU870jDTkREuXnpRyx5Hc",
    "address": "sector 68, Sector 68, Nurpur, Nurpur Jharsa, Haryana 122101, India",
    "lat": 28.3830977,
    "lng": 77.03624429999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 27,
    "pincode": "122101",
    "phone": "+91 86301 11831",
    "phoneSource": "Google",
    "website": "https://leashandlatte.com/"
  },
  {
    "id": "g-tigsiknpgu",
    "type": "boarding",
    "name": "Paw Mama",
    "area": "Sector 70A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJVbGGBMA9DTkRaTIGSIKnpGU",
    "address": "Plot No 25/1 Oposite Sector 70A Darbaripur Road Village Palra, Gurugram, Haryana 122101, India",
    "lat": 28.3814317,
    "lng": 77.0161014,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 51,
    "pincode": "122101",
    "phone": "+91 72918 14160",
    "phoneSource": "Google",
    "website": "http://www.pawmama.in/"
  },
  {
    "id": "g-c43vlvf7yg",
    "type": "boarding",
    "name": "Mutt Vacations - Dog Boarding",
    "area": "Sector 70A",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJU9KKX4wiDTkR2C43vLVf7yg",
    "address": "BPTP Astaire Garden, Sector 70A, Gurugram, Haryana 122101, India",
    "lat": 28.3851774,
    "lng": 77.0223271,
    "rating": 4,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122101",
    "phone": "+91 95994 37998",
    "phoneSource": "Google",
    "website": "https://www.facebook.com/pg/muttvacations/"
  },
  {
    "id": "g-2cw9wig56g",
    "type": "boarding",
    "name": "Furry Buddy ( pet boarding and cafe)",
    "area": "Sector 70A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ6aB9fQQjDTkRw2CW9wIg56g",
    "address": "mustil kila no. 45, 15/2, Vpo parla, Sector 70A, Gurugram, Haryana 122101, India",
    "lat": 28.3719601,
    "lng": 77.0227265,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122101",
    "phone": "+91 92051 17176",
    "phoneSource": "Google"
  },
  {
    "id": "g-mymsstrbsa",
    "type": "boarding",
    "name": "Dogs Day Out",
    "area": "Sector 70A",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJz1v4NAAjDTkRXmymssTRBsA",
    "address": "PARAS IRENE, Sector 70A, Gurugram, Haryana 122101, India",
    "lat": 28.3858882,
    "lng": 77.01735939999999,
    "pincode": "122101"
  },
  {
    "id": "g-knl4cdpiyc",
    "type": "boarding",
    "name": "Pups & Pals K9",
    "area": "Sector 69",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJo3Y9xaYZDTkRcKnl4cdPIyc",
    "address": "A1/G03, TULIP WHITE, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.3964467,
    "lng": 77.0364766,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 238,
    "pincode": "122101"
  },
  {
    "id": "g-4wp8lxhy-c",
    "type": "boarding",
    "name": "Borkie",
    "area": "Sector 69",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJhfeKpK0jDTkRP4Wp8lXhY-c",
    "address": "near Genpact, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.3970015,
    "lng": 77.04089789999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122101",
    "phone": "+91 88103 67016",
    "phoneSource": "Google",
    "website": "https://www.borkie.in/"
  },
  {
    "id": "g-_qgsmyex3q",
    "type": "vet",
    "name": "Zigly",
    "area": "Sector 66",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJI51jiAMjDTkRy_QgsmyEx3Q",
    "address": "Unit no 113, Ground Floor, AIPL JOY STREET, Badshahpur, Sector 66, Gurugram, Haryana 122101, India",
    "lat": 28.3921416,
    "lng": 77.0598832,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 408,
    "pincode": "122101",
    "phone": "+91 8071 912 468",
    "phoneSource": "Google",
    "website": "https://zigly.com/pages/appointment-form"
  },
  {
    "id": "g-2bk_ispxmg",
    "type": "vet",
    "name": "DAT PET SHOP, CLINIC & BOARDING",
    "area": "Bhondsi",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJrbvSlf0jDTkRv2BK_IspxMg",
    "address": "Chachu Hut, Maruti Kunj Rd, near SBI BANK, Bhondsi, Gurugram, Haryana 122102, India",
    "lat": 28.361121299999997,
    "lng": 77.0642256,
    "rating": 3.8,
    "ratingSource": "Google",
    "reviews": 22,
    "pincode": "122102",
    "phone": "+91 96545 49421",
    "phoneSource": "Google"
  },
  {
    "id": "g-eegviao4jg",
    "type": "vet",
    "name": "Dr. Vikrant Singh dog & vet clinic",
    "area": "Bhondsi",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJT3lT_WcjDTkRWEEGviao4jg",
    "address": "Badshahpur, Bhondsi, Haryana 122102, India",
    "lat": 28.3678335,
    "lng": 77.0630716,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 41,
    "pincode": "122102",
    "phone": "+91 95485 69761",
    "phoneSource": "Google",
    "website": "https://duhoonvikrant.wixsite.com/dogcare"
  },
  {
    "id": "g-jmtp5okjmu",
    "type": "vet",
    "name": "CP Vet Sector 66",
    "area": "Sector 66",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJj9pyXLojDTkRqJmtP5oKJMU",
    "address": "Shop no. 4, Ground Floor, HUB 66 Mall, Badshahpur, Sector 66, Gurugram, Haryana 122101, India",
    "lat": 28.391173799999997,
    "lng": 77.0574457,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 23,
    "pincode": "122101",
    "phone": "+91 96256 46104",
    "phoneSource": "Google",
    "website": "https://www.cpvet.in/"
  },
  {
    "id": "g-5yj12uuphc",
    "type": "vet",
    "name": "Vet At Home By Dr. Rahul Yadav",
    "area": "Bhondsi",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJBcLbqfwjDTkR45YJ12uUPHc",
    "address": "Maruti Kunj C Type, near by SHYAM KUNJ HOSPITAL, Bhondsi, no - 7, Maruti Kunj, Haryana, 122102, India",
    "lat": 28.3601596,
    "lng": 77.076134,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 64,
    "pincode": "122102",
    "phone": "+91 93504 09324",
    "phoneSource": "Google",
    "website": "https://vetathomes.in/"
  },
  {
    "id": "g-wpejjjqyew",
    "type": "vet",
    "name": "Vet At Home",
    "area": "Bhondsi",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJ3Y7gYPsjDTkRbWPejjjQYew",
    "address": "H.no - 129, 7, Maruti Kunj C Type, near by shyam kunj hospital, Bhondsi, GURGAON, Maruti Kunj, Haryana 122102, India",
    "lat": 28.360136999999998,
    "lng": 77.0790316,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 20,
    "pincode": "122102",
    "website": "http://vetathome.in/"
  },
  {
    "id": "g-ccmvssey_w",
    "type": "vet",
    "name": "Satcura Pet Service",
    "area": "Sector 67",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJFZW_qEQjDTkR5cCMvSsEy_w",
    "address": "Dhumaspur, Sector 67, Gurugram, Haryana 122101, India",
    "lat": 28.3804527,
    "lng": 77.0738934,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122101",
    "phone": "+91 93506 04844",
    "phoneSource": "Google",
    "website": "https://satcurapetservices.com/"
  },
  {
    "id": "g-qr7cabdo8q",
    "type": "vet",
    "name": "Cadovet Pet clinic",
    "area": "Bhondsi",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ1e3pwDwjDTkRKqr7CAbDO8Q",
    "address": "behind Jagmal Singh Stadium, Bhondsi, Haryana 122102, India",
    "lat": 28.3608501,
    "lng": 77.0647245,
    "pincode": "122102",
    "website": "https://cadovetpetclinic.com/"
  },
  {
    "id": "g-lei2vydwmu",
    "type": "vet",
    "name": "Vet Nest Care",
    "area": "Bhondsi",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJq6eV3o4jDTkRrLEI2vYdwmU",
    "address": "Vet Nest Care, behind Jamal Singh Stadium, Bhondsi, Haryana 122102, India",
    "lat": 28.350986700000004,
    "lng": 77.0615139,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 12,
    "pincode": "122102"
  },
  {
    "id": "g--uq6f1ar1q",
    "type": "boarding",
    "name": "Becky's Bow Wow House",
    "area": "Sector-63A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ9-DWKDQjDTkRe-uq6f1ar1Q",
    "address": "17/1, 410, Golf Course Extension Road, Sector-63A, Gurugram, Kadarpur, Haryana 122098, India",
    "lat": 28.3849923,
    "lng": 77.0881895,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 205,
    "pincode": "122098",
    "phone": "+91 87503 23141",
    "phoneSource": "Google",
    "website": "http://www.beckysbowwowhouse.com/"
  },
  {
    "id": "g-zk_hqnjg8k",
    "type": "boarding",
    "name": "Muddy Paws Dog Park & Cafe",
    "area": "Sector 66",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJd2ZRAWYjDTkRMzk_hQNJg8k",
    "address": "Landmark - Lotus Sports Academy, near Ireo Uptown, Badshahpur, Sector 66, Gurugram, Haryana 122101, India",
    "lat": 28.395567000000003,
    "lng": 77.0631858,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 80,
    "pincode": "122101",
    "phone": "+91 83739 17949",
    "phoneSource": "Google"
  },
  {
    "id": "g-sdtjyg4hhw",
    "type": "boarding",
    "name": "OMA PET BOARDING",
    "area": "Bhondsi",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJK7gdGBwjDTkRpsDTjyG4hhw",
    "address": "opposite janak Equestrian Club, Dhumaspur, Bhondsi, Gurugram, Haryana 122102, India",
    "lat": 28.371955999999997,
    "lng": 77.0733185,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 167,
    "pincode": "122102",
    "phone": "+91 99907 74979",
    "phoneSource": "Google",
    "website": "http://www.omapetboarding.com/"
  },
  {
    "id": "g-pvj4vcewva",
    "type": "boarding",
    "name": "Humans & Doggos",
    "area": "Dhumaspur",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ2fUHCx8jDTkRCPVj4VceWVA",
    "address": "Dhumaspur, Gurugram, Haryana 122101, India",
    "lat": 28.3853012,
    "lng": 77.0727587,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 17,
    "pincode": "122101",
    "phone": "+91 98339 56021",
    "phoneSource": "Google"
  },
  {
    "id": "g-xlandu3cj0",
    "type": "boarding",
    "name": "Furry Friends Kennel",
    "area": "Sohna",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJLWRwDecjDTkR7xLAndu3cj0",
    "address": "Bhelpa Green Farms , Behind Kemia Biosciences 1200 metres on Taj Damdama Road, Off, Sohna Expressway, Gurugram, Haryana 122102, India",
    "lat": 28.342291099999997,
    "lng": 77.0815885,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 98,
    "pincode": "122102",
    "phone": "+91 99536 83830",
    "phoneSource": "Google"
  },
  {
    "id": "g-tjtenq906g",
    "type": "boarding",
    "name": "Kennel 1",
    "area": "Sector 63",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ3ZNI21E9DTkRKTJTeNq906g",
    "address": "Sector 63, Gurugram, Kadarpur, Haryana 122102, India",
    "lat": 28.386195899999997,
    "lng": 77.0954975,
    "rating": 4.1,
    "ratingSource": "Google",
    "reviews": 69,
    "pincode": "122102",
    "phone": "+91 98186 01094",
    "phoneSource": "Google",
    "website": "https://kennel1.in/"
  },
  {
    "id": "g-zaxy7j5dos",
    "type": "boarding",
    "name": "SCOOBY ISLAND",
    "area": "Sector 64",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJd4TRZIkjDTkRyzaXY7j5Dos",
    "address": "93PH+427, Golf Course Ext Rd, near M3M Urbana, Ramgarh, Sector 64, Gurugram, Haryana 122101, India",
    "lat": 28.3852797,
    "lng": 77.0775354,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 25,
    "pincode": "122101"
  },
  {
    "id": "g-hwzpz84exu",
    "type": "boarding",
    "name": "Wagging Tails Dog Boarding",
    "area": "Gurugram",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJocdPe-sjDTkReHwzPZ84ExU",
    "address": "933J+2MM, Damdama Lake Rd, Maruti Kunj, Haryana 122102, India",
    "lat": 28.3525827,
    "lng": 77.081666,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 13,
    "pincode": "122102"
  },
  {
    "id": "g-n0amlgzmg0",
    "type": "boarding",
    "name": "Tiny Feets",
    "area": "Sector 67A",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJhbYVi1AjDTkR9n0AMLGzMG0",
    "address": "Pyramid urban 67a, Sector 67A, Gurugram, Haryana 122101, India",
    "lat": 28.380244899999997,
    "lng": 77.0673669,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 10,
    "pincode": "122101",
    "phone": "+91 96257 67922",
    "phoneSource": "Google",
    "website": "https://www.petbacker.in/india/boarding/haryana/gurugram/tinyfeets-home-based-pet-hotel"
  },
  {
    "id": "g-lrqn4nwg0w",
    "type": "boarding",
    "name": "Chien N Chat Pet Boarding & Day Care",
    "area": "Dhumaspur",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJKRFjfAAjDTkRulRqn4Nwg0w",
    "address": "v, 17D, Dhumaspur Rd, Dhumaspur, Gurugram, Haryana 122101, India",
    "lat": 28.3802543,
    "lng": 77.0742349,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122101",
    "phone": "+91 89290 00161",
    "phoneSource": "Google",
    "website": "http://chiennchatboarding.com/"
  },
  {
    "id": "g-jz0pd_vv8y",
    "type": "boarding",
    "name": "Pet boarding and Day Care Centre",
    "area": "Sector 67",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJz-_4MgAjDTkRijZ0PD_Vv8Y",
    "address": "17/3, Dhumaspur Rd, Dhumaspur, Badshahpur, Sector 67, Gurugram, Haryana 122101, India",
    "lat": 28.380558699999998,
    "lng": 77.0748464,
    "pincode": "122101"
  },
  {
    "id": "g-sdzovxjn1e",
    "type": "boarding",
    "name": "Coco Pet Hostel and Day care",
    "area": "Sector 67A",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJ0fgKDrUjDTkR4SDzOvXjN1E",
    "address": "Pyramid Urban, Sector 67A, Gurugram, Haryana 122101, India",
    "lat": 28.380244899999997,
    "lng": 77.0673669,
    "pincode": "122101",
    "phone": "+91 85839 07960",
    "phoneSource": "Google"
  },
  {
    "id": "g-opf-toimhu",
    "type": "boarding",
    "name": "Resho Pet : Pet Boarding Gurgaon",
    "area": "Bhondsi",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJ22IPmgUjDTkRQOPf-tOImHU",
    "address": "Om plaza, near Army Fitness Club, Bhondsi, Gurugram, Haryana 122102, India",
    "lat": 28.3569245,
    "lng": 77.0615253,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 128,
    "pincode": "122102",
    "phone": "+91 95098 68627",
    "phoneSource": "Google",
    "website": "https://www.reshopetboarding.com/"
  },
  {
    "id": "g-ebjrgp9quu",
    "type": "boarding",
    "name": "Dog Boarding in Gurgaon",
    "area": "Sector 63A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ-_GNtnIhDTkRLEBJRGP9QUU",
    "address": "K N - 7 Farm, near Mahindra Bodyshop, Sector 63A, Kadarpur, Gurugram, Haryana 122098, India",
    "lat": 28.3955399,
    "lng": 77.1089343,
    "pincode": "122098"
  },
  {
    "id": "g-xeg_lqvv6k",
    "type": "vet",
    "name": "JP Pet Clinic",
    "area": "Sector 85",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJA7Lhs7c9DTkRLXeg_LqVV6k",
    "address": "Opp DPS- 84 Rao, Atar Singh Chowk, Sikanderpur Sector 85 Rd, Gurugram, Haryana 122012, India",
    "lat": 28.4052215,
    "lng": 76.9602384,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 564,
    "pincode": "122012",
    "phone": "+91 87888 98211",
    "phoneSource": "Google",
    "website": "http://jppetclinic.info/?utm_source=gmb&utm_medium=referral"
  },
  {
    "id": "g-rr-fi3bn3o",
    "type": "vet",
    "name": "Om Pet Hospital",
    "area": "Sector 86",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": true,
    "placeId": "ChIJTQnfTK49DTkRRRR-fI3BN3o",
    "address": "Om pet hospital, near pyramid society, near Ss Omnia, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.398773199999997,
    "lng": 76.9487552,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 189,
    "pincode": "122012",
    "phone": "+91 98124 80045",
    "phoneSource": "Google",
    "website": "https://ompethospital.in/"
  },
  {
    "id": "g-x-oz50o0zs",
    "type": "vet",
    "name": "Max Pet Care",
    "area": "Sector 93",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJDbg8qhAWDTkRtX-OZ50o0Zs",
    "address": "IMT Rd, opposite Orris Market City, Hayatpur, Sector 93, Gurugram, Haryana 122505, India",
    "lat": 28.4235498,
    "lng": 76.9353615,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 212,
    "pincode": "122505"
  },
  {
    "id": "g-91qmltu324",
    "type": "vet",
    "name": "DPC PET CARE CLINIC (DOMESTICITY PET CARE CLINIC)",
    "area": "Sector 86",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJGVwQMS89DTkRv91qmLTU324",
    "address": "DPC Pet Care Clinic ( Domesticity Pet Care Clinic) Right Across Reliance Smart / Haldiram IRIS Mall near Mohan Mandir Hayatpur Road, Sector 86 Rd, Badha, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.404511099999997,
    "lng": 76.9461345,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 126,
    "pincode": "122012",
    "phone": "+91 97184 62200",
    "phoneSource": "Google"
  },
  {
    "id": "g-mzsgtb6vlu",
    "type": "vet",
    "name": "Manesar Pet Clinic",
    "area": "Sector 86",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJRbXm9ZE9DTkRpMZSgtB6vlU",
    "address": "G-11, SS Omnia Mall, Opp Bikanervala, Gurugram NCR, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.4014752,
    "lng": 76.94679640000001,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122012",
    "phone": "+91 95991 62050",
    "phoneSource": "Google"
  },
  {
    "id": "g-s7odsteuoc",
    "type": "vet",
    "name": "VET-24 CLINIC & PET SPA",
    "area": "Sector 94",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": true,
    "placeId": "ChIJvRmvr_YXDTkR5S7odSTEuOc",
    "address": "near police chowki, Hayatpur, Sector 94, Gurugram, Haryana 122505, India",
    "lat": 28.4208274,
    "lng": 76.93628199999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 90,
    "pincode": "122505",
    "phone": "+91 96509 10098",
    "phoneSource": "Google"
  },
  {
    "id": "g-5a7cvp2spo",
    "type": "vet",
    "name": "Wag N Wander",
    "area": "Sector 90",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJNW1RNWE9DTkR95a7cvp2Spo",
    "address": "Near, MRG Ultimus, Sector 90, Gurugram, Haryana 122505, India",
    "lat": 28.408509799999997,
    "lng": 76.9369334,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122505",
    "phone": "+91 73035 84945",
    "phoneSource": "Google",
    "website": "https://wagnwanderwellness.com/"
  },
  {
    "id": "g-jey5vbpg4m",
    "type": "vet",
    "name": "Furry LI'L Paws Pet Clinic Sector 86 Gurgaon",
    "area": "Sector 86",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJgQDtK2YhDTkRAJeY5VbpG4M",
    "address": "GF 20, Shopping Complex, Ss Omnia, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.401412399999998,
    "lng": 76.9468419,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 56,
    "pincode": "122012",
    "phone": "+91 98181 07956",
    "phoneSource": "Google"
  },
  {
    "id": "g-mk05iy0zso",
    "type": "vet",
    "name": "PET WELLNESS HOSPITAL",
    "area": "Sector 91",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJd76PIPw9DTkRiMk05iy0zso",
    "address": "DLF Garden City, B-9/4, Sector 91, Gurugram, Haryana 122505, India",
    "lat": 28.403561099999997,
    "lng": 76.918328,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122505"
  },
  {
    "id": "g-hfau0klo1m",
    "type": "vet",
    "name": "Galleria Pet Clinic",
    "area": "Sector 91",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJvUQqFMY_DTkRkHFau0KlO1M",
    "address": "B- Block, DLF Garden City, Sector 91, Gurugram, Haryana 122505, India",
    "lat": 28.4027134,
    "lng": 76.91806780000002,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122505",
    "phone": "+91 95999 38243",
    "phoneSource": "Google"
  },
  {
    "id": "g-t3pa0_pl0a",
    "type": "vet",
    "name": "Yadav pet clinic",
    "area": "Sector 95",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJBcJs3CIVDTkRdT3pA0_Pl0A",
    "address": "Rishi Sidhu complex, near Trilok Bharti mandir, Wazirpur, Sector 95, Gurugram, Haryana 122505, India",
    "lat": 28.421886999999998,
    "lng": 76.9167933,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122505",
    "phone": "+91 80596 38150",
    "phoneSource": "Google"
  },
  {
    "id": "g-y4ptxuv03a",
    "type": "boarding",
    "name": "Vatika Pet Clinic & Resort",
    "area": "Sector 86",
    "tags": [
      "Boarding",
      "Pet resort"
    ],
    "open24": false,
    "placeId": "ChIJdxRXtkI9DTkRry4PTXUV03A",
    "address": "opposite Silver Streak Hospital, Sector 86, Gurugram, Haryana 122012, India",
    "lat": 28.3987113,
    "lng": 76.93239919999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 30,
    "pincode": "122012",
    "phone": "+91 94683 22948",
    "phoneSource": "Google"
  },
  {
    "id": "g-2pday6rcje",
    "type": "boarding",
    "name": "Tito’s pet resort",
    "area": "Sector 92",
    "tags": [
      "Boarding",
      "Pet resort"
    ],
    "open24": true,
    "placeId": "ChIJ52Yog7s_DTkRr2pdaY6rCjE",
    "address": "Ansal Heights, Sector 92, Gurugram, Haryana 122505, India",
    "lat": 28.4163771,
    "lng": 76.9177363,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 66,
    "pincode": "122505",
    "phone": "+91 87662 84742",
    "phoneSource": "Google"
  },
  {
    "id": "g-v_9jbkeof8",
    "type": "boarding",
    "name": "Guss Cat Sitting",
    "area": "Sector 95A",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJj8oX-BAVDTkRSv_9jbKeOf8",
    "address": "Signature Global Roselia, sec-95a, Sector 95A, Gurugram, Haryana 122505, India",
    "lat": 28.4244624,
    "lng": 76.9179497,
    "rating": 3,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122505",
    "website": "https://www.instagram.com/guss_cat_sitting?igsh=MWhhN244YTlsOXlvZg=="
  },
  {
    "id": "g-zu0crlm-_a",
    "type": "boarding",
    "name": "Happy pet family training and boarding",
    "area": "Sector 95A",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": false,
    "placeId": "ChIJ1xBEO44XDTkRTZU0CrLM-_A",
    "address": "Wazirpur, Sec, Sector 95A, Gurugram, Haryana 122505, India",
    "lat": 28.4229497,
    "lng": 76.92354089999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 43,
    "pincode": "122505",
    "phone": "+91 93153 73920",
    "phoneSource": "Google"
  },
  {
    "id": "g-uakvqxab2y",
    "type": "boarding",
    "name": "Oma Pet Boarding New Gurugram",
    "area": "Sector 91",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJLejnlzQ_DTkRIuAKvQxAb2Y",
    "address": "DLF Garden City, A70 /7, Sector 91, Gurugram, Haryana 122505, India",
    "lat": 28.4019552,
    "lng": 76.9108284,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 28,
    "pincode": "122505",
    "phone": "+91 99907 74979",
    "phoneSource": "Google",
    "website": "https://www.omapetboarding.com/"
  },
  {
    "id": "g-pkhmhuvxqo",
    "type": "vet",
    "name": "TACO Animal Welfare Centre, Gurugram",
    "area": "Sector 74",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJYf13RwA9DTkRWpkhmhUVxqo",
    "address": "9/26, Begumpur Khatola, Sector 74, Gurugram, Haryana 122004, India",
    "lat": 28.411902,
    "lng": 77.00608799999999,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 16,
    "pincode": "122004"
  },
  {
    "id": "g-fku7cl9cfu",
    "type": "vet",
    "name": "Animalia 24X7 Vet Care",
    "area": "Sector 38",
    "tags": [
      "Clinic",
      "24x7"
    ],
    "open24": true,
    "placeId": "ChIJ_____4MiDTkRMfKu7cL9cfU",
    "address": "PLOT NO 104KP, near SHIV SHAKTI MANDIR, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122018, India",
    "lat": 28.4353427,
    "lng": 77.04242990000002,
    "rating": 4.2,
    "ratingSource": "Google",
    "reviews": 352,
    "pincode": "122018",
    "phone": "+91 88102 00312",
    "phoneSource": "Google",
    "website": "https://animalia24x7.com/"
  },
  {
    "id": "g-ijcnwml5oe",
    "type": "vet",
    "name": "PAWSitive VETERINARY HOSPITAL",
    "area": "Sector 69",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": true,
    "placeId": "ChIJZ512W_cjDTkRJIJCNWmL5oE",
    "address": "Vatika Chowk, Badshahpur Sohna Rd, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.4000061,
    "lng": 77.04495659999999,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 610,
    "pincode": "122101",
    "phone": "+91 73030 70144",
    "phoneSource": "Google"
  },
  {
    "id": "g-9mx-iupbja",
    "type": "vet",
    "name": "CP Vet Vatika City",
    "area": "Sector 49",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJtaU5b40iDTkRk9mx-iUPBJA",
    "address": "Shop no 6, City Market Rd, Vatika City, Block W, Sector 49, Gurugram, Haryana 122018, India",
    "lat": 28.4022975,
    "lng": 77.0458458,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 194,
    "pincode": "122018",
    "phone": "+91 85880 76740",
    "phoneSource": "Google",
    "website": "http://cpvet.in/"
  },
  {
    "id": "g-8w0kakzfeu",
    "type": "vet",
    "name": "CP Vet Sector 47",
    "area": "Sector 47",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJU0-fUDEjDTkRi8w0kAkzfEU",
    "address": "SHOP NO-LG,1 2,3, AVA COURT, Malibu Towne, Sector 47, Gurugram, Haryana 122018, India",
    "lat": 28.420002699999998,
    "lng": 77.0473614,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 98,
    "pincode": "122018",
    "phone": "+91 95824 28502",
    "phoneSource": "Google",
    "website": "http://cpvet.in/"
  },
  {
    "id": "g-hsh-yb8kk4",
    "type": "vet",
    "name": "Arcadia Pets",
    "area": "Sector 49",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJK4FaMoEiDTkRMHSh-Yb8kK4",
    "address": "C.G. 32, Arcadia, S City Rd, South City II, Sector 49, Gurugram, Haryana 122018, India",
    "lat": 28.41849,
    "lng": 77.0527149,
    "rating": 3.9,
    "ratingSource": "Google",
    "reviews": 36,
    "pincode": "122018",
    "phone": "+91 124 437 0983",
    "phoneSource": "Google"
  },
  {
    "id": "g-k2gwtlgxbg",
    "type": "vet",
    "name": "Pet's own Place.",
    "area": "Sector 48",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJIYHtMxUjDTkREK2GWTlGXbg",
    "address": "15 Ground Floor, Housing Board Society, near vega School, Sector 48, Gurugram, Haryana 122018, India",
    "lat": 28.411443,
    "lng": 77.0390231,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 2,
    "pincode": "122018"
  },
  {
    "id": "g-9imte6wyf0",
    "type": "vet",
    "name": "SKRD Pet Clinic- LASER",
    "area": "Sector 49",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJpUUWVVkYDTkRk9Imte6WYF0",
    "address": "DG-51 RODEO DRIVE MKT. OPP.- MALIBU TOWN NEAR- GOOD EARTH CITY CENTER, South City II, Sector 49, Gurugram, Haryana 122018, India",
    "lat": 28.4203643,
    "lng": 77.05142620000001,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 40,
    "pincode": "122018",
    "phone": "+91 98919 91003",
    "phoneSource": "Google",
    "website": "https://www.practo.com/Gurgaon/doctor/dr-sandeep-yadav-veterinarian-1?%20specialization=Veterinarian&practice_id=692291"
  },
  {
    "id": "g--beznjkzgm",
    "type": "vet",
    "name": "FUR N FURRY PET CLINIC",
    "area": "Sector 47",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJR9lIpYMiDTkRY-BeZnJKZGM",
    "address": "LGF-15, NEAR, Park Hospital Rd, Malibu Towne, Sector 47, Gurugram, Haryana 122018, India",
    "lat": 28.4198369,
    "lng": 77.04730119999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 2,
    "pincode": "122018"
  },
  {
    "id": "g-drwbg2vccu",
    "type": "vet",
    "name": "Furrvana Pet Clinic & Care Center",
    "area": "Sector 48",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJhaOE9w4jDTkRXDRWbg2vCcU",
    "address": "Besides Bestech Business Tower, opp. FoamXpress Car Wash, Sector 48, Gurugram, Haryana 122018, India",
    "lat": 28.4055932,
    "lng": 77.0433783,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122018",
    "phone": "+91 88261 23438",
    "phoneSource": "Google",
    "website": "https://www.furrvana.co.in/"
  },
  {
    "id": "g-fm3rg1pqeu",
    "type": "boarding",
    "name": "Chester tails",
    "area": "Sector 47",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJlebWgeMjDTkRlFM3rg1pQeU",
    "address": "Shop no LG, 17 and 18, Malibu Shopping Arcadia, Malibu Towne, Sector 47, Gurugram, Haryana 122018, India",
    "lat": 28.422165699999997,
    "lng": 77.05239739999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 75,
    "pincode": "122018"
  },
  {
    "id": "g-ioaimosdw0",
    "type": "boarding",
    "name": "The cozy pet clinic & boarding",
    "area": "Sector 69",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJtwUrOAAjDTkRmIoAimosDW0",
    "address": "C22V+2P4, Sector 69, Gurugram, Haryana 122101, India",
    "lat": 28.399969799999997,
    "lng": 77.0441117,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 23,
    "pincode": "122101",
    "phone": "+91 74284 81818",
    "phoneSource": "Google",
    "website": "https://the-cozy-pet-boarding.grexa.site/"
  },
  {
    "id": "g-q2wel6k-vq",
    "type": "boarding",
    "name": "Pet boarding loft",
    "area": "Sector 73",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJVQ2CxCwjDTkRiq2wel6k-VQ",
    "address": "C8a/38, dlf alameda, Sector 73, Gurugram, Haryana 122101, India",
    "lat": 28.4103393,
    "lng": 77.0186865,
    "pincode": "122101"
  },
  {
    "id": "g-eur9etbr6a",
    "type": "boarding",
    "name": "PawStay Pet Boarding Gurgaon",
    "area": "Sector 47",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJcfbdhNIZDTkRveur9ETbR6A",
    "address": "Near, Subhash Chowk, Marble Market, Sector 34, Sector 47, Gurugram, Haryana 122018, India",
    "lat": 28.4286644,
    "lng": 77.0370454,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122018"
  },
  {
    "id": "g-fcxtck8xfi",
    "type": "boarding",
    "name": "Happy doggos",
    "area": "Sector 50",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJN7KxrPMjDTkR1FCXTCK8xfI",
    "address": "G Block, South City II, Sector 50, Gurugram, Haryana 122018, India",
    "lat": 28.4151393,
    "lng": 77.0572119,
    "pincode": "122018"
  },
  {
    "id": "g-bin-bok6qq",
    "type": "vet",
    "name": "Peteazy",
    "area": "Sector 57",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ5yo0qgkiDTkR0BIN-boK6qQ",
    "address": "2913, Ashiyana Floors Basement, Sushant Lok Phase 3, Sushant Lok 2, Sector 57, Gurugram, Haryana 122011, India",
    "lat": 28.4213369,
    "lng": 77.0836255,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 450,
    "pincode": "122011",
    "phone": "+91 89015 09125",
    "phoneSource": "Google",
    "website": "http://www.peteazy.in/"
  },
  {
    "id": "g-jtpdmf9zhk",
    "type": "vet",
    "name": "Healing touch pet hospital",
    "area": "Sector 51",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJQV0PeqcZDTkR3JtpdmF9zhk",
    "address": "207,Basement, Sector 51, Gurugram, Haryana 122018, India",
    "lat": 28.4344717,
    "lng": 77.0654627,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 199,
    "pincode": "122018",
    "phone": "+91 95309 10564",
    "phoneSource": "Google",
    "website": "http://www.healingtouchpethospital.com/"
  },
  {
    "id": "g-qxbvkv_nky",
    "type": "vet",
    "name": "The Fur Life Pet Care",
    "area": "Sector 46",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJufDTXFoZDTkRRqXBVKv_NkY",
    "address": "House No, 1508 SP, Huda Colony, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.429556700000003,
    "lng": 77.05978000000002,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 348,
    "pincode": "122003",
    "phone": "+91 95990 55051",
    "phoneSource": "Google",
    "website": "https://thefurlifepethospital.wordpress.com/"
  },
  {
    "id": "g-m6li6mdm5y",
    "type": "vet",
    "name": "Dr Manoj Vet Care Pet Clinic",
    "area": "Sector 52",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ1fZjRAAZDTkR6M6lI6Mdm5Y",
    "address": "Plot no.377 P, opposite Huda Market, Koyal Vihar, Sector 52, Gurugram, Haryana 122003, India",
    "lat": 28.434932699999997,
    "lng": 77.07130389999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 138,
    "pincode": "122003",
    "phone": "+91 99967 97899",
    "phoneSource": "Google"
  },
  {
    "id": "g-avvlpm3j4g",
    "type": "vet",
    "name": "Asteria veterinary centre",
    "area": "Sector 65",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJf-XfFb4ZDTkR0aVvLpm3j4g",
    "address": "Asteria veterinary center, Shop no 82, EMERALD PLAZA, Sector 65, Gurugram, Haryana 122101, India",
    "lat": 28.4058757,
    "lng": 77.06818799999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 161,
    "pincode": "122101",
    "phone": "+91 96674 44879",
    "phoneSource": "Google",
    "website": "https://asteria-veterinary.grexa.site/"
  },
  {
    "id": "g-uptpzb4w4q",
    "type": "vet",
    "name": "Pet World Home by Dr. Satish Chhillar",
    "area": "Sector 51",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJCbmvcnMZDTkR2uPTPzB4w4Q",
    "address": "House No:379 Sector 51 Near to Princeton Floor, Sector 51, Gurugram, Haryana 122018, India",
    "lat": 28.4328324,
    "lng": 77.0673326,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 14,
    "pincode": "122018",
    "phone": "+91 98104 52666",
    "phoneSource": "Google"
  },
  {
    "id": "g-jzr1y-mlkg",
    "type": "vet",
    "name": "Zigly Pet Care",
    "area": "Sector 57",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJO02y9y4jDTkR4Jzr1Y-Mlkg",
    "address": "R1 - G, M3M Atrium, 06, Sushant Lok III Extension, Sector 57, Gurugram, Haryana 122011, India",
    "lat": 28.423751300000003,
    "lng": 77.07524529999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 110,
    "pincode": "122011",
    "phone": "+91 8071 265 282",
    "phoneSource": "Google",
    "website": "https://stores.zigly.com/locations/gurugram/sector-/zigly-pet-care-vet-clinic-pet-grooming-pet-products-in-sector-57-gurugram--6MJgWX/home"
  },
  {
    "id": "g-oa03s6epim",
    "type": "vet",
    "name": "Triage Veterinary Hospital",
    "area": "Sector 46",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJM6ToAzsZDTkR9OA03S6epiM",
    "address": "3115, Ambedkar Chowk, 1st St, near mall fifty, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.436764399999998,
    "lng": 77.06667999999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 67,
    "pincode": "122003",
    "phone": "+91 76786 64632",
    "phoneSource": "Google"
  },
  {
    "id": "g-1mtfbompm4",
    "type": "vet",
    "name": "PRECISE PET CLINIC",
    "area": "Sector 56",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJyTSPOLwjDTkRN1MtFBomPm4",
    "address": "GF- 10, sushant tower, Sector 56, Gurugram, Haryana 122011, India",
    "lat": 28.421522099999997,
    "lng": 77.1020355,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 165,
    "pincode": "122011",
    "phone": "+91 88406 67843",
    "phoneSource": "Google"
  },
  {
    "id": "g-jt0dqzb0ds",
    "type": "boarding",
    "name": "Mr and Miss Paws",
    "area": "Sector 50",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJqRpX9Z8jDTkRwJT0dQzB0Ds",
    "address": "Plot No 430, next to LOTUS VALLEY SCHOOL, Nirvana Country, Sector 50, Gurugram, Haryana 122011, India",
    "lat": 28.4164846,
    "lng": 77.06934559999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 151,
    "pincode": "122011",
    "phone": "+91 98998 39899",
    "phoneSource": "Google"
  },
  {
    "id": "g-0y4kyhxgc0",
    "type": "vet",
    "name": "Sniff N Snooz",
    "area": "Sector 65",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJf-aXScEjDTkR60y4kYHxgc0",
    "address": "EPS-GF 78, EMERALD PLAZA, near avenue 65 mall, Sector 65, Gurugram, Haryana 122101, India",
    "lat": 28.4057942,
    "lng": 77.0682293,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 314,
    "pincode": "122101",
    "phone": "+91 98187 28444",
    "phoneSource": "Google",
    "website": "https://www.sniffnsnooz.in/"
  },
  {
    "id": "g-1qkpjgqnc0",
    "type": "boarding",
    "name": "HappyPets (Dogs & Cat) Boarding",
    "area": "Sector 57",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJkXb_baQjDTkRm1QkpjGqNc0",
    "address": "B block, H 11, Block B, Sushant Lok III, Sector 57, Gurugram, Haryana 122011, India",
    "lat": 28.4218914,
    "lng": 77.080343,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 66,
    "pincode": "122011",
    "phone": "+91 88798 91642",
    "phoneSource": "Google",
    "website": "https://instagram.com/happypets_homeboarding?utm_medium=copy_link"
  },
  {
    "id": "g-mb4y-ecb9c",
    "type": "boarding",
    "name": "Ginger Dog Boarding & Grooming",
    "area": "Sector 57",
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJw___v08YDTkRnmb4y-eCb9c",
    "address": "Sector 57, Gurugram, Haryana 122011, India",
    "lat": 28.425252099999998,
    "lng": 77.07264239999999,
    "rating": 4.1,
    "ratingSource": "Google",
    "reviews": 177,
    "pincode": "122011"
  },
  {
    "id": "g-6pfcxupyay",
    "type": "boarding",
    "name": "Academy of Canine",
    "area": "Sector 62",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": false,
    "placeId": "ChIJ5W5JwO8jDTkRm6PFcXupyAY",
    "address": "Kila-18 nangli umarpur, Ullawas Dhani Rd, near Swastik hospital, Sector 62, Gurugram, Haryana 122098, India",
    "lat": 28.4052145,
    "lng": 77.08422709999999,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 72,
    "pincode": "122098",
    "phone": "+91 79822 24982",
    "phoneSource": "Google"
  },
  {
    "id": "g-ytsz0cehgc",
    "type": "vet",
    "name": "DR MAHENDRAN'S PET CLINIC",
    "area": "Sector 59",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJkVgSsT4hDTkRvYtsz0cehGc",
    "address": "GF- 86, Flat location, opp. Ireo, Alahawas, Sector 59, Gurugram, Haryana 122098, India",
    "lat": 28.4060055,
    "lng": 77.1140423,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 7,
    "pincode": "122098",
    "phone": "+91 98101 17102",
    "phoneSource": "Google"
  },
  {
    "id": "g-iot2vpl_jg",
    "type": "vet",
    "name": "CP Vet Sector 63",
    "area": "Sector 63",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ19Zr-cQjDTkR_IOT2vpL_jg",
    "address": "Shop No. Ground Floor 20, Paras Trinity, Sector 63, Gurugram, Haryana 122098, India",
    "lat": 28.401334499999997,
    "lng": 77.09187419999999,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 48,
    "pincode": "122098",
    "phone": "+91 95602 00944",
    "phoneSource": "Google",
    "website": "https://www.cpvet.in/"
  },
  {
    "id": "g-g4q5hgia84",
    "type": "vet",
    "name": "The Pet Clinic",
    "area": "Sector 55",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJNVVVlf0hDTkR0G4Q5HGia84",
    "address": "Huda Plots, 28, Huda, Sushant Lok 2, Sector 55, Gurugram, Haryana 122011, India",
    "lat": 28.4294203,
    "lng": 77.1076205,
    "rating": 4,
    "ratingSource": "Google",
    "reviews": 45,
    "pincode": "122011",
    "phone": "+91 98110 43887",
    "phoneSource": "Google",
    "website": "https://sites.google.com/view/thepetclinic-vinaykjain/home"
  },
  {
    "id": "g-57zu9gkky8",
    "type": "vet",
    "name": "Veterinary Hospital",
    "area": "Sector 67",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJh2N0cCgiDTkR957zU9gKky8",
    "address": "94V2+C49, Kadarpur Rd, Kadarpur Road, Sector 67, Gurugram, Haryana 122098, India",
    "lat": 28.393536299999997,
    "lng": 77.1003511,
    "rating": 3.9,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122098"
  },
  {
    "id": "g-n3klld2dfq",
    "type": "vet",
    "name": "Suncity Pet Clinic",
    "area": "Sector 54",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJSRzzwTEfDTkR8n3KLlD2dFQ",
    "address": "UGF-104, Suncity Road, Suncity, Sector 54, Gurugram, Haryana 122011, India",
    "lat": 28.435757499999998,
    "lng": 77.1115344,
    "pincode": "122011",
    "phone": "+91 92176 17416",
    "phoneSource": "Google"
  },
  {
    "id": "g-fv-4y5gocm",
    "type": "boarding",
    "name": "Tail Club",
    "area": "Sector 59",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJf7vzVM0hDTkRMFV-4Y5GOcM",
    "address": "Raisina Rd, Alahawas, Sector 59, Gurugram, Haryana 122098, India",
    "lat": 28.4041808,
    "lng": 77.1086917,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 557,
    "pincode": "122098",
    "phone": "+91 70429 47427",
    "phoneSource": "Google",
    "website": "https://tailclub.in/"
  },
  {
    "id": "g-qzbu6kcjby",
    "type": "boarding",
    "name": "Ultimutt Pet Resort",
    "area": "Gwal Pahari",
    "tags": [
      "Boarding",
      "Pet resort"
    ],
    "open24": false,
    "placeId": "ChIJcc_fMIohDTkRDqzbU6kCjbY",
    "address": "Faridabad - Gurgaon Rd, near CNG pump, Gwal Pahari, Gurugram, Bandhwari, Haryana 122003, India",
    "lat": 28.428450400000003,
    "lng": 77.1389497,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 500,
    "pincode": "122003",
    "phone": "+91 80 6906 9783",
    "phoneSource": "Google",
    "website": "http://www.ultimutt.in/"
  },
  {
    "id": "g-hojogeo6zg",
    "type": "boarding",
    "name": "Barking Lot Pet Resort",
    "area": "Sector 58",
    "tags": [
      "Boarding",
      "Pet resort"
    ],
    "open24": true,
    "placeId": "ChIJv2E5hc0hDTkRGHOjOgEo6zg",
    "address": "Sector 58, Gurugram, Haryana 122011, India",
    "lat": 28.4160918,
    "lng": 77.12307559999999,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 155,
    "pincode": "122011",
    "phone": "+91 99999 09644",
    "phoneSource": "Google",
    "website": "http://www.barkinglotpetresort.com/"
  },
  {
    "id": "g-ijlms3kqwk",
    "type": "boarding",
    "name": "B.M.R KENNEL",
    "area": "Sector 59",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJtaWxuKIhDTkRVijLMs3KQWk",
    "address": "Alahawas, Sector 59, Gurugram, Haryana 122098, India",
    "lat": 28.4083719,
    "lng": 77.111977,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 93,
    "pincode": "122098",
    "phone": "+91 98718 30084",
    "phoneSource": "Google"
  },
  {
    "id": "g-fnabcgfu8y",
    "type": "boarding",
    "name": "Tailseazy",
    "area": "Balola",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ-5jcC_UhDTkRiFNabCgFu8Y",
    "address": "opp. urban akhara, behrampur, Balola, Gurugram, Haryana 122011, India",
    "lat": 28.413884799999998,
    "lng": 77.1193091,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 53,
    "pincode": "122011",
    "phone": "+91 98960 90995",
    "phoneSource": "Google",
    "website": "http://www.tailseazy.in/"
  },
  {
    "id": "g-dmn6wincgo",
    "type": "boarding",
    "name": "Cuddlingg k9s",
    "area": "Sector 63A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJzwLAyIMhDTkRXDMn6WInCgo",
    "address": "Village new Behrampur, near Government Model Sanskriti Primary School, Alahawas, Sector 63A, Gurugram, Haryana 122098, India",
    "lat": 28.399721699999997,
    "lng": 77.10984499999999,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 29,
    "pincode": "122098",
    "phone": "+91 93111 56929",
    "phoneSource": "Google"
  },
  {
    "id": "g-cutf0spuzi",
    "type": "boarding",
    "name": "Dogstel",
    "area": "Sector 62",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJNaok3k8jDTkR2cUTf0SPuzI",
    "address": "gate no.4, CRPF Rd, opposite Heritage School, near Ullawas Market, Sector 62, Gurugram, Haryana 122098, India",
    "lat": 28.4111591,
    "lng": 77.08735519999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 56,
    "pincode": "122098",
    "phone": "+91 96676 96691",
    "phoneSource": "Google",
    "website": "http://www.dogstel.in/"
  },
  {
    "id": "g-bwtrameoc4",
    "type": "boarding",
    "name": "Pawtel",
    "area": "Gwal Pahari",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ36_c_t4hDTkRrbWtrAMeOc4",
    "address": "A 35, Near, Faridabad - Gurgaon Rd, Gwal Pahari, Gurugram, Bandhwari, Haryana 122101, India",
    "lat": 28.403823499999998,
    "lng": 77.1356364,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 46,
    "pincode": "122101",
    "website": "https://www.facebook.com/Pawtel-Dog-Boarding-Dog-Park-and-Cafe-148509442630682/"
  },
  {
    "id": "g-gae5hon-fu",
    "type": "boarding",
    "name": "Woof & Co",
    "area": "Sector 55",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ-XfkupwZDTkRCGAe5hOn-FU",
    "address": "208, Block C, Sushant Lok 2, Sector 55, Gurugram, Haryana 122011, India",
    "lat": 28.427637899999997,
    "lng": 77.1117145,
    "rating": 4,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122011",
    "phone": "+91 95604 00864",
    "phoneSource": "Google"
  },
  {
    "id": "g-xbehygerne",
    "type": "boarding",
    "name": "Pawgarh Palace",
    "area": "Baliawas",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJAwWnwrYhDTkRaXbEhyGERNE",
    "address": "Golf Course Extension Road, near Pathways School, Sector 58, Baliawas, Gurugram, Haryana 122011, India",
    "lat": 28.4218735,
    "lng": 77.13233869999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 32,
    "pincode": "122011",
    "website": "https://pawgarhpalace.com/"
  },
  {
    "id": "g-wbwlmml2q4",
    "type": "boarding",
    "name": "K'ahu Pet Boarding",
    "area": "Baliawas",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJzTbKposhDTkRsWbWlMmL2Q4",
    "address": "Plot 1, Wisteria Club Rd, near Surjo Construction company, Baliawas, Gurugram, Bandhwari, Haryana 122101, India",
    "lat": 28.422144,
    "lng": 77.14162329999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 7,
    "pincode": "122101"
  },
  {
    "id": "g-z6jobw8rxw",
    "type": "boarding",
    "name": "Paws La Casa",
    "area": "Baliawas",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJXcrA47whDTkRhZ6jOBw8rXw",
    "address": "Farm No.4, Gwal Pahari, near Jamun Grove, Baliawas, Bandhwari, Gurugram, Haryana 122003, India",
    "lat": 28.4299523,
    "lng": 77.1388621,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122003",
    "phone": "+91 89200 96943",
    "phoneSource": "Google"
  },
  {
    "id": "g-bwfbbvuk1m",
    "type": "vet",
    "name": "Friendicoes SECA Gurgaon Animal Hospital & Sanctuary",
    "area": "Garhi Harsaru",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJwUbfC2EWDTkRkbWfBbvUK1M",
    "address": "Garhi Harsaru, Gopalpur Khera sector 99, Gurugram, Tughlapur, Garhi Harsaru, Tughlapur, Garhi Harsaru, Gurugram, Haryana 122505, India",
    "lat": 28.4558999,
    "lng": 76.9368674,
    "rating": 4.1,
    "ratingSource": "Google",
    "reviews": 708,
    "pincode": "122505",
    "phone": "+91 70277 77949",
    "phoneSource": "Google"
  },
  {
    "id": "g-faqqyejhc8",
    "type": "vet",
    "name": "Vetify Animal Clinic Dr.gautam",
    "area": "Gurugram",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJLYkOb6gXDTkRvFaqqYEjHC8",
    "address": "Satya The Hive, near khatushyam mandir, Dhankot, Gurugram, Haryana 122505, India",
    "lat": 28.4700596,
    "lng": 76.95999979999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122505",
    "phone": "+91 88823 77167",
    "phoneSource": "Google"
  },
  {
    "id": "g-lqjopkjh50",
    "type": "vet",
    "name": "Rajkiya Pashu Chikitsalaya",
    "area": "Garhi Harsaru",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ6SGPzWgWDTkRulqjoPKJh50",
    "address": "CWWP+274, Sikhawala, Garhi Harsaru, Gurugram, गुरुग्राम (हरि, Haryana 122505, India",
    "lat": 28.445005799999997,
    "lng": 76.9357125,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122505"
  },
  {
    "id": "g-cj_gp_mohw",
    "type": "vet",
    "name": "Zigly Pet Care",
    "area": "Sector 102",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ-UdO6TQXDTkRACJ_GP_MoHw",
    "address": "Ground Floor, The Hive, Unit No23, Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.4713213,
    "lng": 76.96316329999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 198,
    "pincode": "122505",
    "phone": "+91 8071 936 821",
    "phoneSource": "Google",
    "website": "https://zigly.com/pages/appointment-form"
  },
  {
    "id": "g-qnnieokkbm",
    "type": "vet",
    "name": "The Paws Palace Veterinary Clinic",
    "area": "Sector 37D",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJb7IAspAZDTkRSqNNieOkkbM",
    "address": "Roopchand Farm, opposite BPTP market, Sector 37 D, Sector 37D, Gurugram, Haryana 122006, India",
    "lat": 28.4565593,
    "lng": 76.9755472,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 110,
    "pincode": "122006",
    "phone": "+91 97172 32133",
    "phoneSource": "Google"
  },
  {
    "id": "g-te1o3rtylu",
    "type": "vet",
    "name": "Fit Pets Veterinary Clinic",
    "area": "Sector 10A",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJTTqrqvcXDTkRftE1O3rtyLU",
    "address": "31, First Floor, SCO, HUDA Market, market of sector 10A, Sector 10A, Gurugram, Haryana 122001, India",
    "lat": 28.4401539,
    "lng": 77.0070642,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 238,
    "pincode": "122001",
    "phone": "+91 88267 12976",
    "phoneSource": "Google"
  },
  {
    "id": "g-0p27judpja",
    "type": "vet",
    "name": "Om Pet Clinic",
    "area": "Sector 9A",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJeVVrHgAXDTkRv0p27judPJA",
    "address": "Sector 9, Chowk, Block C, Surya Vihar, Sector 9A, Gurugram, Haryana 122001, India",
    "lat": 28.4689424,
    "lng": 77.0054222,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 149,
    "pincode": "122001",
    "phone": "+91 99966 49066",
    "phoneSource": "Google"
  },
  {
    "id": "g-lwebtd9bee",
    "type": "vet",
    "name": "Vet Pulse Pet Clinic",
    "area": "Sector 102",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJyxAXze4XDTkRvLwEBTd9BEE",
    "address": "1, Ground Floor, SUNCITY AVENUE-102, Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.472025799999997,
    "lng": 76.9688067,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 68,
    "pincode": "122505",
    "phone": "+91 70427 81861",
    "phoneSource": "Google"
  },
  {
    "id": "g-cgawdvcvz0",
    "type": "vet",
    "name": "Pet Care Clinic",
    "area": "Sector 10A",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJO_Uz3o4XDTkR4cgAWDvcvZ0",
    "address": "F223+68J, IOC Colony, Sector 10A, Gurugram, Haryana 122001, India",
    "lat": 28.450585699999998,
    "lng": 77.0032514,
    "rating": 3.6,
    "ratingSource": "Google",
    "reviews": 24,
    "pincode": "122001",
    "phone": "+91 98110 24125",
    "phoneSource": "Google"
  },
  {
    "id": "g-cscvw34wlu",
    "type": "vet",
    "name": "pet wellness Clinic and home visit services",
    "area": "Sector 10",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJK1yZPJcXDTkR0cSCVw34WlU",
    "address": "Kadipur Rd, Krishna Nagar, Sector 10, Gurugram, Haryana 122001, India",
    "lat": 28.451849199999998,
    "lng": 77.006649,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 5,
    "pincode": "122001",
    "phone": "+91 81072 61666",
    "phoneSource": "Google",
    "website": "https://daksh-pet-wellness.grexa.site/"
  },
  {
    "id": "g-pqexuvowyo",
    "type": "vet",
    "name": "Dr. Sandeep vet on call",
    "area": "Sector 102",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJvw867akXDTkRjpqeXUVoWyo",
    "address": "Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.469854599999998,
    "lng": 76.9705276,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 6,
    "pincode": "122505",
    "phone": "+91 70157 25804",
    "phoneSource": "Google"
  },
  {
    "id": "g-uxgmcjmulc",
    "type": "vet",
    "name": "Chaudhary Pet Care (Online & home visit)",
    "area": "Sector 10A",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJvdpfG9QXDTkRruXgmcJmUlc",
    "address": "House no.1218 , first floor, Sector 10A, Gurugram, Haryana 122001, India",
    "lat": 28.4478695,
    "lng": 77.00610429999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122001",
    "phone": "+91 87009 00597",
    "phoneSource": "Google"
  },
  {
    "id": "g-bs0jk90adk",
    "type": "vet",
    "name": "Pet Needs And grooming",
    "area": "Sector 11",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJ5_MzuTAZDTkROBS0JK90Adk",
    "address": "Oposite indane gas agency, Pataudi Rd, near police choki and manglam hospital, Gandhi Nagar, Sector 11, Gurugram, Haryana 122001, India",
    "lat": 28.4534256,
    "lng": 77.01267779999999,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 31,
    "pincode": "122001",
    "phone": "+91 95822 12177",
    "phoneSource": "Google"
  },
  {
    "id": "g-4zhzdxpmpc",
    "type": "vet",
    "name": "Om Pet Hospital",
    "area": "Sector 37C",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": true,
    "placeId": "ChIJ1fThnyAXDTkRk4zHZdxpMPc",
    "address": "Om Pet Hospital, Naveen Home, near Bharat Petrol Pump, opposite Ild Grand, society, Sector 37C, Gurugram, Haryana 122006, India",
    "lat": 28.4538679,
    "lng": 76.98763389999999,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 13,
    "pincode": "122006",
    "phone": "+91 84483 31124",
    "phoneSource": "Google",
    "website": "https://ompethospital.in/"
  },
  {
    "id": "g-fkjbcub1tg",
    "type": "vet",
    "name": "Woofy Pets and Groomers",
    "area": "Sector 7",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": true,
    "placeId": "ChIJ3R2D0oEXDTkRnfkjbCub1tg",
    "address": "Sector 7 Extension, Sector 7 Ext, Sector 7, Gurugram, Haryana 122001, India",
    "lat": 28.4654694,
    "lng": 77.0069023,
    "pincode": "122001"
  },
  {
    "id": "g-mhxi8tvf9c",
    "type": "vet",
    "name": "Wag N Wander",
    "area": "Sector 102",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ9bVHWWwXDTkRfmHxI8TvF9c",
    "address": "near ROF Aalayas, Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.4749713,
    "lng": 76.971509,
    "rating": 3.4,
    "ratingSource": "Google",
    "reviews": 5,
    "pincode": "122505",
    "phone": "+91 73035 84945",
    "phoneSource": "Google",
    "website": "https://wagnwanderwellness.com/"
  },
  {
    "id": "g-tvkfmgx8-w",
    "type": "boarding",
    "name": "All day dogs training and boarding",
    "area": "Sector 9A",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": true,
    "placeId": "ChIJv1C_e4IXDTkRgTVKFmGX8-w",
    "address": "H No 116, Sector 9A, Gurugram, Haryana 122001, India",
    "lat": 28.4652612,
    "lng": 76.9912537,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 55,
    "pincode": "122001",
    "phone": "+91 99111 00320",
    "phoneSource": "Google",
    "website": "http://candywithfurries.com/"
  },
  {
    "id": "g-gkdhj58e6w",
    "type": "boarding",
    "name": "Sam's Pets (Boarding)",
    "area": "Sector 9A",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJM-1_-4kZDTkRjgkDHj58e6w",
    "address": "House no 123, Sector 9A, Gurugram, Haryana 122001, India",
    "lat": 28.465944,
    "lng": 76.99143579999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 13,
    "pincode": "122001",
    "phone": "+91 90466 77616",
    "phoneSource": "Google"
  },
  {
    "id": "g-4blaka4uii",
    "type": "boarding",
    "name": "Sumit Pet’s Boarding and Daycare",
    "area": "Sector 37C",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJE-hxJyoXDTkRY4blaKA4UiI",
    "address": "House no 774, Sector 37C, Gurugram, Haryana 122006, India",
    "lat": 28.450285299999997,
    "lng": 76.9867945,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 21,
    "pincode": "122006",
    "phone": "+91 98715 63123",
    "phoneSource": "Google"
  },
  {
    "id": "g-sx7vlzshv8",
    "type": "boarding",
    "name": "The Meow Motels",
    "area": "Sector 37D",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJ_4_rBgAXDTkRXsX7VlZShV8",
    "address": "Signature Global The Millennia-1, Sector 37D, Gurugram, Haryana 122006, India",
    "lat": 28.4465006,
    "lng": 76.9790252,
    "pincode": "122006"
  },
  {
    "id": "g-dx2ubqmfns",
    "type": "vet",
    "name": "VET 4 PET",
    "area": "Sector 46",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJRyIVSYYYDTkRXDX2uBqmFNs",
    "address": "Residency Green, Jal Vihar Colony, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.4388772,
    "lng": 77.0546863,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 156,
    "pincode": "122003",
    "phone": "+91 98966 06336",
    "phoneSource": "Google",
    "website": "https://vet4petgurugram.com/Best_Dog_Clinic_in_Gurugram.aspx"
  },
  {
    "id": "g-fbud01jpwy",
    "type": "vet",
    "name": "PETS PASH",
    "area": "Sector 14",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJrezIxK0ZDTkRvfbUd01jpwY",
    "address": "SCO NO. 166-167, TANGLES SALOON BASEMENT, near HANUMAN MANDIR, OM SWEETS MARKET, DLF Colony, Sector 14, Gurugram, Haryana 122007, India",
    "lat": 28.474279199999998,
    "lng": 77.04699699999999,
    "rating": 3.7,
    "ratingSource": "Google",
    "reviews": 393,
    "pincode": "122007",
    "phone": "+91 99990 05645",
    "phoneSource": "Google",
    "website": "http://www.petspash.com/"
  },
  {
    "id": "g-dtg6ovfe1o",
    "type": "vet",
    "name": "VETLAB GURGAON",
    "area": "Sector 40",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJt1XMZvUYDTkRhdTG6ovfE1o",
    "address": "SCO 74 FIRST FLOOR, Huda Market, above BANK OF MAHARASHTRA, Sector 40, Gurugram, Haryana 122003, India",
    "lat": 28.449268900000003,
    "lng": 77.0567609,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 130,
    "pincode": "122003",
    "phone": "+91 124 437 3200",
    "phoneSource": "Google",
    "website": "https://vetlab.co.in/"
  },
  {
    "id": "g-os28grzxp4",
    "type": "vet",
    "name": "Pet Pulse Veterinary Clinic",
    "area": "Rajiv Chowk",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJTWpJDcUZDTkRFOS28GrzXP4",
    "address": "240/157 Beri Bagh Road, New, near Nexa Showroom, Shanti Nagar, Heera Nagar, Rajiv Chowk, Gurugram, Haryana 122001, India",
    "lat": 28.4500319,
    "lng": 77.02520369999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 54,
    "pincode": "122001",
    "phone": "+91 70159 81390",
    "phoneSource": "Google"
  },
  {
    "id": "g-lvki5lzrbc",
    "type": "vet",
    "name": "PET CARE4SURE",
    "area": "Patel Nagar",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJA2jThLEZDTkRxLvKI5LZRBc",
    "address": "Shop no -2, Shaheed Major Vikas Yadav Marg, near 3D GROCERY STORE, Sector 15 Part 1, Patel Nagar, Gurugram, Haryana 122001, India",
    "lat": 28.455582999999997,
    "lng": 77.03790339999999,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 25,
    "pincode": "122001",
    "phone": "+91 82877 18294",
    "phoneSource": "Google"
  },
  {
    "id": "g-ywqkstrw74",
    "type": "vet",
    "name": "Pets Life Care Clinic",
    "area": "Sector 7",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ8_KNrNUZDTkR2YwQkSTRw74",
    "address": "Dayal Market, Urban Estate, Sector 7, Gurugram, Haryana 122001, India",
    "lat": 28.4699709,
    "lng": 77.0140323,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 18,
    "pincode": "122001",
    "phone": "+91 81680 42713",
    "phoneSource": "Google"
  },
  {
    "id": "g-873qxkeaxg",
    "type": "vet",
    "name": "Enn Kay Pet Clinic",
    "area": "Sector 7",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ8w-JVTMZDTkRK873qxkEAXg",
    "address": "F288+98J, New Colony, Sector 7, Gurugram, Haryana 122001, India",
    "lat": 28.465969800000003,
    "lng": 77.0157783,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 25,
    "pincode": "122001"
  },
  {
    "id": "g-t3cb-lv5cg",
    "type": "vet",
    "name": "Urban pet veterinary Hospital",
    "area": "Sector 7",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJpWo_VFMZDTkR2T3Cb-lv5cg",
    "address": "Huda Market Rd, near vijman restaurant, opp. Harish bakery, Urban Estate, Sector 7, Gurugram, Haryana 122001, India",
    "lat": 28.472592199999998,
    "lng": 77.0179674,
    "rating": 3.7,
    "ratingSource": "Google",
    "reviews": 12,
    "pincode": "122001"
  },
  {
    "id": "g-wapivoybz8",
    "type": "boarding",
    "name": "PetOcean",
    "area": "Sector 46",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJgXosJXIZDTkRhWapiVOyBZ8",
    "address": "C3M3+HV7, Huda Colony, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.4339223,
    "lng": 77.0546592,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 41,
    "pincode": "122003"
  },
  {
    "id": "g-tz28dylwii",
    "type": "boarding",
    "name": "Pawster_foster",
    "area": "Sector 46",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJD5U2sk0ZDTkR2Tz28DYlWiI",
    "address": "C3M4+JRF, Huda Colony, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.434062,
    "lng": 77.0570395,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 16,
    "pincode": "122003",
    "website": "https://www.instagram.com/p/CfllsABPZI5/?igshid=YmMyMTA2M2Y="
  },
  {
    "id": "g-0fjm1tjcg0",
    "type": "boarding",
    "name": "Kuddles dog Training and boarding house 🏠",
    "area": "Lajpat Nagar",
    "tags": [
      "Boarding",
      "Training"
    ],
    "open24": true,
    "placeId": "ChIJP2uNACUXDTkRJ0FjM1TJCG0",
    "address": "262, New Railway Rd, opposite Lall Nursing Home, Lajpat Nagar, Block A, Mianwali Colony, Lajpat Nagar, Gurugram, Haryana 122001, India",
    "lat": 28.465983899999998,
    "lng": 77.0284652,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 192,
    "pincode": "122001",
    "phone": "+91 75055 24195",
    "phoneSource": "Google"
  },
  {
    "id": "g-160qzbvp7i",
    "type": "vet",
    "name": "Pet clinic Dr. Shiv Kumar",
    "area": "Sector 11",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJI5COB-sZDTkRo160QzbvP7I",
    "address": "Gali no.4, 354/21, Street No. 1, opposite Raj nagar, opposite Shivam Medical Hall, Raj Nagar, Maruti Colony, Om Nagar, Sector 11, Gurugram, Haryana 122001, India",
    "lat": 28.449267700000004,
    "lng": 77.01842979999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122001"
  },
  {
    "id": "g-mp7koalsii",
    "type": "boarding",
    "name": "YADAV PET CLINIC Since (2007)",
    "area": "Sector 40",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJWRMqcfUYDTkRqMp7KoalSiI",
    "address": "shop no.-97, Huda Market, near Bank of India, Sector 40, Gurugram, Haryana 122003, India",
    "lat": 28.449006699999998,
    "lng": 77.0573739,
    "rating": 4.2,
    "ratingSource": "Google",
    "reviews": 18,
    "pincode": "122003",
    "phone": "+91 74043 46034",
    "phoneSource": "Google",
    "website": "http://vetopiapetclinic.com/services.html"
  },
  {
    "id": "g-doi75ocrtm",
    "type": "boarding",
    "name": "Explorer pet care",
    "area": "Sector 41",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJJ_USwhIZDTkR9doI75ocrTM",
    "address": "2p, near shaktipeeth mandir, South City I, Sector 41, Gurugram, Haryana 122003, India",
    "lat": 28.454446200000003,
    "lng": 77.05811349999999,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 21,
    "pincode": "122003",
    "phone": "+91 88606 66680",
    "phoneSource": "Google"
  },
  {
    "id": "g-oacadxrgse",
    "type": "boarding",
    "name": "House of Dogs",
    "area": "Sector 39",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJIby7yfMZDTkR9OAcaDXRgsE",
    "address": "Jharsa, Sector 39, Gurugram, Haryana 122003, India",
    "lat": 28.4438735,
    "lng": 77.05148439999999,
    "rating": 4,
    "ratingSource": "Google",
    "reviews": 7,
    "pincode": "122003"
  },
  {
    "id": "g--2hkauqbb0",
    "type": "boarding",
    "name": "Mothers dog boarding house",
    "area": "Sector 6",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJC4r_pLb_DDkRx-2HKAuqbB0",
    "address": "house, number 1359c, 559/29, Ashok Puri, Dayanand Colony, Sector 6, Gurugram, Haryana 122001, India",
    "lat": 28.4715095,
    "lng": 77.02180609999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 49,
    "pincode": "122001",
    "phone": "+91 82878 11501",
    "phoneSource": "Google",
    "website": "https://mothers-dog-boarding.grexa.site/"
  },
  {
    "id": "g-uzh8l0vcha",
    "type": "vet",
    "name": "The Eye Vet",
    "area": "Sector 29",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJxYgxs3YZDTkRUUzH8L0vCHA",
    "address": "2nd Floor, SCO - 303, near HOD, Sector 29, Gurugram, Haryana 122009, India",
    "lat": 28.4645063,
    "lng": 77.0648394,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 106,
    "pincode": "122009",
    "phone": "+91 92090 01675",
    "phoneSource": "Google",
    "website": "https://theeye.vet/"
  },
  {
    "id": "g-bvpo989bxm",
    "type": "vet",
    "name": "Niti Bagh Pet Clinic- GURGAON",
    "area": "Kanahi",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJlcK9AegYDTkRcbVPO989bXM",
    "address": "G-15,16&39, Shopping Arcade, Shushant Marg, Block B, Sushant Lok Phase I, Kanahi, Gurugram, Haryana 122009, India",
    "lat": 28.460784099999998,
    "lng": 77.0794215,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 585,
    "pincode": "122009",
    "phone": "+91 124 427 2550",
    "phoneSource": "Google",
    "website": "https://www.nitibaghpetclinic.com/"
  },
  {
    "id": "g-xkknz0yjmw",
    "type": "vet",
    "name": "Crown Vet Sushant Lok",
    "area": "Sector 43",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ94nvPbMZDTkR0xKknz0YJMw",
    "address": "Plot No. B 65, Block B, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.4647738,
    "lng": 77.0799045,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 86,
    "pincode": "122009",
    "phone": "+91 80 6274 4108",
    "phoneSource": "Google",
    "website": "https://crown.vet/gurugram-vet.asp"
  },
  {
    "id": "g-yimy8e6u-u",
    "type": "vet",
    "name": "Sicons The Pet Safari",
    "area": "Sector 42",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ-7AFoPwZDTkRlyIMY8E6U-U",
    "address": "Plot No 18P, Golf Course Rd, opp. Global Foyer Mall, Sector 42, Gurugram, Haryana 122009, India",
    "lat": 28.461572000000004,
    "lng": 77.096166,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 406,
    "pincode": "122009",
    "phone": "+91 84474 84840",
    "phoneSource": "Google",
    "website": "https://siconsthepetsafari.com/"
  },
  {
    "id": "g-6z7vx3vcug",
    "type": "boarding",
    "name": "Wagging Tales",
    "area": "Sector 43",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJaQkPCD0ZDTkR66z7vx3vCug",
    "address": "30, opp. police station, DLF PHASE 5, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.4607617,
    "lng": 77.0936952,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 147,
    "pincode": "122009"
  },
  {
    "id": "g-i9sljy-ji0",
    "type": "boarding",
    "name": "Cat Boarding in Gurgaon - Meow Abode",
    "area": "Sector 43",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJ1bf4lqAZDTkR2i9sLJY-Ji0",
    "address": "Block C Dr, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.4532018,
    "lng": 77.07970209999999,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 32,
    "pincode": "122009",
    "phone": "+91 99711 19740",
    "phoneSource": "Google"
  },
  {
    "id": "g-cljnyxgnhk",
    "type": "boarding",
    "name": "Wow Pets",
    "area": "Sector 43",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJt-2EcDIZDTkRscLJnyxGnhk",
    "address": "UGF 131 vyapar kendar main market, road, Sushant Lok, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.460350499999997,
    "lng": 77.0843668,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 51,
    "pincode": "122009",
    "phone": "+91 99100 71544",
    "phoneSource": "Google",
    "website": "https://wowpets.in/"
  },
  {
    "id": "g-g01biq6kvc",
    "type": "boarding",
    "name": "Petresort : Pet Grooming & Boarding",
    "area": "Sector 43",
    "tags": [
      "Boarding",
      "Grooming",
      "Pet resort"
    ],
    "open24": true,
    "placeId": "ChIJy2dcehwZDTkRxG01BIq6kVc",
    "address": "House no- C-595 Sushant lok Phase -1, near Vyapar Kendra Road, Block C, Market, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.4566585,
    "lng": 77.0813119,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 248,
    "pincode": "122009",
    "phone": "+91 99716 57996",
    "phoneSource": "Google",
    "website": "http://www.petresort.co.in/"
  },
  {
    "id": "g-o95seb8imw",
    "type": "boarding",
    "name": "Pet Boarding",
    "area": "Sector 46",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJZw3GcwAZDTkRGO95SEB8Imw",
    "address": "1542, Sector Rd, Huda Colony, Sector 46, Gurugram, Haryana 122003, India",
    "lat": 28.4307089,
    "lng": 77.0578201,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 5,
    "pincode": "122003"
  },
  {
    "id": "g-o4ctfda9qo",
    "type": "vet",
    "name": "Sicons The Pet Safari",
    "area": "Sector 43",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJrQhrZ_UZDTkRxO4cTFda9qo",
    "address": "Rapid Metro Station, 562, Golf Course Rd, behind Sec 42, Sector 43, Gurugram, Haryana 122009, India",
    "lat": 28.457962,
    "lng": 77.094343,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 126,
    "pincode": "122009",
    "phone": "+91 84474 80400",
    "phoneSource": "Google",
    "website": "https://www.siconsthepetsafari.com/"
  },
  {
    "id": "g-pgoicswjyy",
    "type": "vet",
    "name": "Zigly",
    "area": "Sector 54",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJWSPFnP8fDTkRjPgOiCSWJyY",
    "address": "Shop No, Ground Floor, GE 09, DLF Summit Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122009, India",
    "lat": 28.445624199999997,
    "lng": 77.1055891,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 24,
    "pincode": "122009",
    "phone": "+91 8071 433 162",
    "phoneSource": "Google",
    "website": "https://zigly.com/pages/appointment-form"
  },
  {
    "id": "g-z86xbowkua",
    "type": "vet",
    "name": "Dog homeopathy centre",
    "area": "Sector 26",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJZ-zD-n8fDTkRfZ86XBowkuA",
    "address": "Shopping Arcade, 16&39, G 15 Ln, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana 122002, India",
    "lat": 28.470670100000003,
    "lng": 77.10769429999999,
    "rating": 1,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122002"
  },
  {
    "id": "g-pxo2rrsz8i",
    "type": "vet",
    "name": "Vet Prime Care Clinic",
    "area": "Sector 26",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJI-VrKosfDTkR3pxO2rrsZ8I",
    "address": "gate no. 7, Silver Oaks Ave, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana 122002, India",
    "lat": 28.4706603,
    "lng": 77.1055544,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 37,
    "pincode": "122002",
    "phone": "+91 87500 51999",
    "phoneSource": "Google",
    "website": "https://vetprime.pookies.xyz/"
  },
  {
    "id": "g-rvgkdmjlx0",
    "type": "boarding",
    "name": "Paws and play",
    "area": "Sector 42",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJNwbK2W7jDDkR5rvgKdmjlX0",
    "address": "Magnolias Rd, Sector 42, Gurugram, Haryana 122009, India",
    "lat": 28.457289,
    "lng": 77.099847,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 24,
    "pincode": "122009",
    "phone": "+91 99905 83480",
    "phoneSource": "Google"
  },
  {
    "id": "g-orbqhj2vhm",
    "type": "boarding",
    "name": "PetArinaa",
    "area": "Sector 42",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJZzCk-hQ9DTkRzoRBQHJ2vHM",
    "address": "Sector 28, Sector 42, Gurugram, Haryana 122009, India",
    "lat": 28.460224399999998,
    "lng": 77.097566,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 12,
    "pincode": "122009",
    "phone": "+91 95604 53929",
    "phoneSource": "Google"
  },
  {
    "id": "g-sj5pipoi7w",
    "type": "boarding",
    "name": "The Catsville Boulevard Cat Boarding",
    "area": "Mandi",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": false,
    "placeId": "ChIJEV24znwfDTkR6sj5piPoi7w",
    "address": "C4PP+CX4, Ansal Rd Number 1, Valley View Estate, Mandi, Bandhwari, Haryana 122003, India",
    "lat": 28.436003699999997,
    "lng": 77.1374541,
    "rating": 3.3,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122003"
  },
  {
    "id": "g-imzkpl6wo0",
    "type": "vet",
    "name": "Sunshine pet shop and pet care centre",
    "area": "Gurugram",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJwfJRF54XDTkRIimZkPl6wO0",
    "address": "Kherki, road, opposite sabzi mandi, Dhankot, Gurugram, Haryana 122505, India",
    "lat": 28.474201200000003,
    "lng": 76.9610068,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 38,
    "pincode": "122505",
    "phone": "+91 87663 52260",
    "phoneSource": "Google"
  },
  {
    "id": "g-wwgqkl4mr4",
    "type": "vet",
    "name": "Global Pet Care Clinic & Surgery Center",
    "area": "Sector 102",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJUWsuaPkXDTkRZWWGqkL4Mr4",
    "address": "link road, Dwarka Expy, opp. Imperial heritage school, Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.4764008,
    "lng": 76.96477209999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 56,
    "pincode": "122505",
    "phone": "+91 88993 86787",
    "phoneSource": "Google",
    "website": "https://global-pet-care.localo.site/?utm_source=google&utm_medium=business_profile&utm_campaign=main_link_to_website_localo"
  },
  {
    "id": "g-jb3hcfg65s",
    "type": "vet",
    "name": "Vet on call Gurugram",
    "area": "Gurugram",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJfcuirekXDTkRejB3HCFG65s",
    "address": "Dhanwapur Rd, Gurugram, Haryana 122505, India",
    "lat": 28.4804715,
    "lng": 76.9609512,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 8,
    "pincode": "122505",
    "website": "https://vet-on-call.grexa.site/"
  },
  {
    "id": "g-7ppdbrronc",
    "type": "vet",
    "name": "All Pet Solutions",
    "area": "Gurugram",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ8fbES48XDTkRq7pPdBrrONc",
    "address": "Dhankot, Gurugram, Haryana 122505, India",
    "lat": 28.4721009,
    "lng": 76.9628925,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 152,
    "pincode": "122505",
    "phone": "+91 99911 04187",
    "phoneSource": "Google"
  },
  {
    "id": "g-sbi-qieapg",
    "type": "boarding",
    "name": "Woof boarding & Grooming",
    "area": "Sector 102",
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": true,
    "placeId": "ChIJz7-jMwAXDTkRTSbI-qIeAPg",
    "address": "Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.4735475,
    "lng": 76.9632488,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 26,
    "pincode": "122505",
    "phone": "+91 81784 87687",
    "phoneSource": "Google"
  },
  {
    "id": "g-fh2wm25u9m",
    "type": "boarding",
    "name": "Magical Fur Stay. Co",
    "area": "Sector 102",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJUamrX0gXDTkRHfH2wm25U9M",
    "address": "Shri Ram enclave, Plot 150, Sector 102, Gurugram, Haryana 122505, India",
    "lat": 28.480334799999998,
    "lng": 76.95974919999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 17,
    "pincode": "122505",
    "phone": "+91 96677 51884",
    "phoneSource": "Google",
    "website": "https://magicalfurstayco.com/"
  },
  {
    "id": "g-nhkadlycxm",
    "type": "vet",
    "name": "PET CARE4SURE",
    "area": "Gurgaon Rural",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJM29BZ88XDTkRKNHKADlYcXM",
    "address": "SHOP NO-3, Dhanwapur Rd, near VENCER MART, Sector 3A, Laxman Vihar, Gurgaon Rural, Gurugram, Haryana 122006, India",
    "lat": 28.479332699999997,
    "lng": 77.0104983,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 122,
    "pincode": "122006",
    "phone": "+91 87006 50039",
    "phoneSource": "Google"
  },
  {
    "id": "g-rc43nkwy60",
    "type": "vet",
    "name": "Bow Bow's Den Resort | Dog Day Care",
    "area": "Sector 107",
    "tags": [
      "Clinic",
      "Daycare",
      "Pet resort"
    ],
    "open24": false,
    "placeId": "ChIJZRXzjikXDTkRJrC43Nkwy60",
    "address": "75, meter road, opp. neo center, beside Kore realty, Sector 107, Gurugram, Haryana 122006, India",
    "lat": 28.500252099999997,
    "lng": 76.9771487,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 80,
    "pincode": "122006",
    "phone": "+91 99996 05040",
    "phoneSource": "Google",
    "website": "https://www.bow-bowsden.com/"
  },
  {
    "id": "g-ysmvjwpadc",
    "type": "vet",
    "name": "Gurugram Pinaka Vets",
    "area": "Sector 108",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ7XNmNuYRDTkR2ysMVjwpadc",
    "address": "Experion, The Westerlies, DP 08, road, near Experion, near 75mtr, Dharampur, Sector 108, Gurugram, Haryana 122006, India",
    "lat": 28.509088499999997,
    "lng": 76.9867039,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 101,
    "pincode": "122006",
    "phone": "+91 89306 06675",
    "phoneSource": "Google",
    "website": "http://www.pinakavets.com/"
  },
  {
    "id": "g-h1q631afhw",
    "type": "vet",
    "name": "Pet Healthcare & Grooming Center",
    "area": "Sector 4",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJUdFab18XDTkR3H1q631AfHw",
    "address": "Shop No - 76, Huda Market Rd, near Om Sweets, Sector 4, Gurugram, Haryana 122006, India",
    "lat": 28.4742769,
    "lng": 77.0093217,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 74,
    "pincode": "122006",
    "phone": "+91 95402 46465",
    "phoneSource": "Google",
    "website": "https://pethealthcaregroomingcentre.in/"
  },
  {
    "id": "g-od--qwou5e",
    "type": "vet",
    "name": "PET CARE4SURE",
    "area": "Gurgaon Rural",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJeXoDDZwZDTkRhOd--qwoU5E",
    "address": "Shop no 33, Dhanwapur Rd, Sector 3A, Laxman Vihar, Gurgaon Rural, Gurugram, Haryana 122006, India",
    "lat": 28.479360399999997,
    "lng": 77.0105,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 5,
    "pincode": "122006"
  },
  {
    "id": "g-pyk6ye2zpe",
    "type": "vet",
    "name": "PN PET CARE AND CLINIC",
    "area": "Sector 108",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJJfFgvtgRDTkRSPYk6yE2ZpE",
    "address": "M3M road, Dharampur, Sector 108, Gurugram, Haryana 122006, India",
    "lat": 28.512658799999997,
    "lng": 76.9770351,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 2,
    "pincode": "122006",
    "phone": "+91 92055 83137",
    "phoneSource": "Google"
  },
  {
    "id": "g-_9o7ofjory",
    "type": "vet",
    "name": "THE GURGAON VETS",
    "area": "Sector 103",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJJ0jS83wXDTkRC_9O7oFJORY",
    "address": "INDIABULLS, ROAD, DAULTABAD VILLAGE, Sector 103, Gurugram, Haryana 122006, India",
    "lat": 28.4993888,
    "lng": 76.98517939999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 22,
    "pincode": "122006",
    "phone": "+91 87083 97114",
    "phoneSource": "Google"
  },
  {
    "id": "g-vqo-ssahak",
    "type": "vet",
    "name": "Healing paws animal clinic and surgical centre",
    "area": "Sector 109",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ-wvtLIojDTkR7VqO-sSAHAk",
    "address": "Ground floor, Conscient One, CG-152, Dwarka Expy, Sector 109, Pawala Khasrupur, Gurugram, Haryana 122006, India",
    "lat": 28.502989399999997,
    "lng": 77.0070719,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 72,
    "pincode": "122006",
    "phone": "+91 77180 39529",
    "phoneSource": "Google"
  },
  {
    "id": "g-epnxthfagq",
    "type": "vet",
    "name": "PET SAGA - GROOMING AND CLINIC",
    "area": "Ashok Vihar Phase- 1",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJYfnB6FUZDTkR_ePnXthfagQ",
    "address": "Shop no 3, Old Railway Rd, near shree Shyam dosawala, Ashok Vihar, Ashok Vihar Phase- 1, Gurugram, Haryana 122006, India",
    "lat": 28.4824938,
    "lng": 77.0139799,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122006"
  },
  {
    "id": "g-mz32uidq8u",
    "type": "vet",
    "name": "Monkoodog",
    "area": "Sector 4",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJoY4NEM8ZDTkRYmZ32Uidq8U",
    "address": "House No - 2121, Urban Estate, Sector 4, Gurugram, Haryana 122006, India",
    "lat": 28.4738044,
    "lng": 77.01067610000001,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 169,
    "pincode": "122006",
    "phone": "+91 88269 65008",
    "phoneSource": "Google",
    "website": "https://monkoodog.com/"
  },
  {
    "id": "g-7qoslnciwc",
    "type": "vet",
    "name": "Vet on call",
    "area": "Sector 104",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": true,
    "placeId": "ChIJ_6798UEXDTkRd7qOSLNciwc",
    "address": "1st Floor, 2527, Tech Chand Nagar, Sector 104, Gurugram, Haryana 122006, India",
    "lat": 28.487927,
    "lng": 76.99349699999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122006",
    "phone": "+91 86838 41587",
    "phoneSource": "Google",
    "website": "https://vetoncall.in/"
  },
  {
    "id": "g-rtmc98rnvg",
    "type": "vet",
    "name": "NOBLE pet clinic",
    "area": "Sector 103",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJCbbCpqIXDTkRSrTMC98RNVg",
    "address": "Near, Satya The Hermitage, society, Sector 103, Gurugram, Haryana 122006, India",
    "lat": 28.496194799999998,
    "lng": 76.9905414,
    "pincode": "122006"
  },
  {
    "id": "g-dtnxnnwii4",
    "type": "boarding",
    "name": "Chien N Chat Pet Shop & Spa",
    "area": "Sector 109",
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJKfbO_KIXDTkRCDtnxNNwiI4",
    "address": "Shop No. AG-35, Ground Floor, Conscient One, Sector 109, Gurugram, Haryana 122006, India",
    "lat": 28.503153899999997,
    "lng": 77.0072904,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 537,
    "pincode": "122006",
    "phone": "+91 93155 36558",
    "phoneSource": "Google",
    "website": "https://www.instagram.com/chien.n.chat/"
  },
  {
    "id": "g-r0-set9toc",
    "type": "boarding",
    "name": "Mrs Kusum's",
    "area": "Ashok Vihar Phase- 1",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJ6cK9JqMZDTkRmr0-SeT9Toc",
    "address": "47, Gali No. 5, Ashok Vihar, Ashok Vihar Phase- 1, Gurugram, Haryana 122006, India",
    "lat": 28.4840812,
    "lng": 77.01663520000001,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 327,
    "pincode": "122006",
    "phone": "+91 88265 96894",
    "phoneSource": "Google"
  },
  {
    "id": "g-wlgxvmd9ls",
    "type": "boarding",
    "name": "Cherry's Pet Boarding & Day Care",
    "area": "Palam Vihar",
    "tags": [
      "Boarding",
      "Daycare"
    ],
    "open24": true,
    "placeId": "ChIJO8kgmRIZDTkRawlGXvmD9ls",
    "address": "C2, Block C 2, Palam Vihar, Gurugram, Haryana 122017, India",
    "lat": 28.4932095,
    "lng": 77.0162488,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 49,
    "pincode": "122017",
    "phone": "+91 98979 69954",
    "phoneSource": "Google",
    "website": "https://www.instagram.com/cherryspetboarding/profilecard/?igsh=eXg0dDd5YnJleGt6"
  },
  {
    "id": "g-mcqhm4pqss",
    "type": "boarding",
    "name": "PAWZILLA : Dog Boarding Centre",
    "area": "Gurgaon Rural",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJC3kQ5r8ZDTkR2mCQHm4pqSs",
    "address": "1144/31, Sector 3A, Laxman Vihar, Gurgaon Rural, Gurugram, Haryana 122006, India",
    "lat": 28.482091999999998,
    "lng": 77.0105744,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122006"
  },
  {
    "id": "g-gmcccdz8tm",
    "type": "boarding",
    "name": "Barkplay Pet boarding Gurgaon",
    "area": "Gurgaon Rural",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJLXFlQJIZDTkR3GmCcCDz8tM",
    "address": "1117B, C, 2 Block, near GEMS INTERNATIONAL SCHOOL, Sector 3, Gurgaon Rural, Gurugram, Haryana 122017, India",
    "lat": 28.4936081,
    "lng": 77.0157126,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 42,
    "pincode": "122017",
    "phone": "+91 98119 81049",
    "phoneSource": "Google",
    "website": "http://barkplay.in/"
  },
  {
    "id": "g-zex5b82fho",
    "type": "boarding",
    "name": "Pawz Dog Home Boarding",
    "area": "Sector 109",
    "tags": [
      "Boarding",
      "Home boarding"
    ],
    "open24": false,
    "placeId": "ChIJ1VHIRjEXDTkR3Zex5b82FHo",
    "address": "RAHEJA ATHARVA, Sector 109, Gurugram, Haryana 122006, India",
    "lat": 28.5090868,
    "lng": 77.0049998,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122006",
    "phone": "+91 96259 63624",
    "phoneSource": "Google",
    "website": "https://www.facebook.com/profile.php?id=61578100747464"
  },
  {
    "id": "g-i6xt5eb9ss",
    "type": "vet",
    "name": "RD Pet Clinic",
    "area": "Ashok Vihar Phase II",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJT4BYzsUZDTkRRi6Xt5EB9ss",
    "address": "Palam Vihar Rd, Block E, Ashok Vihar, Ashok Vihar Phase II, Gurugram, Haryana 122006, India",
    "lat": 28.4895993,
    "lng": 77.0195279,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 135,
    "pincode": "122006",
    "phone": "+91 79887 53521",
    "phoneSource": "Google"
  },
  {
    "id": "g-kjs3kebpkc",
    "type": "vet",
    "name": "Pet Prime",
    "area": "Sector 5",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJXT4uFzsZDTkRRkJs3KebPkc",
    "address": "Shop no. 4, Huda Market, Sector 5, Gurugram, Haryana 122006, India",
    "lat": 28.4802291,
    "lng": 77.0205158,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 516,
    "pincode": "122006",
    "phone": "+91 94163 15202",
    "phoneSource": "Google"
  },
  {
    "id": "g-jhrqyt5bk0",
    "type": "vet",
    "name": "Wag N Wander",
    "area": "Sector 5",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ14VwCC4ZDTkR7jHrQYt5Bk0",
    "address": "SHOP NO.85, BR-1, opposite HUDA GROUND, adjacent to RAVI MEDICOS, Sheetla Colony, Sector 5, Gurugram, Haryana 122006, India",
    "lat": 28.482704599999998,
    "lng": 77.022145,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 713,
    "pincode": "122006",
    "phone": "+91 73035 84945",
    "phoneSource": "Google",
    "website": "https://wagnwanderwellness.com/"
  },
  {
    "id": "g-jiszavh-ea",
    "type": "vet",
    "name": "B.M.R PET CLINIC",
    "area": "Sector 110",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJUyLjSPwZDTkR-jIszavh-EA",
    "address": "Shop 1 main Baghera road, New Palam Vihar, Chandan Vihar, New Palam Vihar Phase 3, Sector 110, Gurugram, Haryana 122017, India",
    "lat": 28.5110241,
    "lng": 77.0260326,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 66,
    "pincode": "122017",
    "phone": "+91 78275 06871",
    "phoneSource": "Google"
  },
  {
    "id": "g-76b5f9o4po",
    "type": "vet",
    "name": "The Pet Tails Pet Grooming shop",
    "area": "Palam Vihar",
    "tags": [
      "Clinic",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJXfd40-cbDTkRo76b5F9O4po",
    "address": "Shop no.15, ground floor, Ram mandir market, near Bikaner sweet, opposite Celebrity Homes, Choma, Chauma Village, Sector 1, Palam Vihar, Gurugram, Haryana 122017, India",
    "lat": 28.5142737,
    "lng": 77.035641,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 61,
    "pincode": "122017",
    "phone": "+91 92058 85825",
    "phoneSource": "Google",
    "website": "https://thepettails.gonukkad.com/"
  },
  {
    "id": "g--ossgmxtt8",
    "type": "boarding",
    "name": "PN PET CARE CLINIC",
    "area": "Sector 5",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJIyG-sNsZDTkRZ-OssGMXTt8",
    "address": "Sheetla Colony, Sector 5, Gurugram, Haryana 122006, India",
    "lat": 28.482620299999997,
    "lng": 77.02221519999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 11,
    "pincode": "122006",
    "phone": "+91 81309 63137",
    "phoneSource": "Google"
  },
  {
    "id": "g-e8s96_xjpu",
    "type": "boarding",
    "name": "Shuperpet Clinic & Pet Store",
    "area": "Sector 23",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJnZwJueMZDTkRhe8S96_XJPU",
    "address": "Shop No 139, market, Sector 23, Huda Market, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "lat": 28.511480400000003,
    "lng": 77.0486325,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 94,
    "pincode": "122017",
    "phone": "+91 98106 91056",
    "phoneSource": "Google",
    "website": "https://shuperpet.in/"
  },
  {
    "id": "g-yjhuzlwyhw",
    "type": "boarding",
    "name": "The dog camp",
    "area": "Sector 5",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJJReygq8ZDTkRjyJHUzlWyHw",
    "address": "near gyandeep sr sec school, Sheetla Colony, Sector 5, Gurugram, Haryana 122006, India",
    "lat": 28.4837448,
    "lng": 77.02338759999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 3,
    "pincode": "122006"
  },
  {
    "id": "g-54ia70u-pe",
    "type": "vet",
    "name": "PET CARE4SURE",
    "area": "Ashok Vihar Phase III Extension",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJ6SOhaTkZDTkRv54ia70U-pE",
    "address": "Shop-2, Gauri Properties Building Chaudhary, TVS Rd, Block C 1, Ashok Vihar Phase III Extension, Gurugram, Haryana 122006, India",
    "lat": 28.4999552,
    "lng": 77.0271911,
    "pincode": "122006"
  },
  {
    "id": "g-4t09fy6mum",
    "type": "boarding",
    "name": "The pets hotel gurugram",
    "area": "Sector 109",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJlWYBUDQXDTkRo4T09Fy6MUM",
    "address": "t 85, New Palam Vihar, New Palam Vihar Phase 2, Sector 109, Gurugram, Pawala Khasrupur, Haryana 122017, India",
    "lat": 28.511664399999997,
    "lng": 77.00991309999999,
    "rating": 4.8,
    "ratingSource": "Google",
    "reviews": 67,
    "pincode": "122017",
    "phone": "+91 93105 24553",
    "phoneSource": "Google",
    "website": "https://thepetshotel.in/about.php"
  },
  {
    "id": "g-tuunj_z5h8",
    "type": "vet",
    "name": "Noble care pet clinic",
    "area": "Sector 22",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJc9FL5KYZDTkRRtuUnj_Z5H8",
    "address": "311p, pocket c, Sector 22A, Sector 22, Gurugram, Haryana 122015, India",
    "lat": 28.5028404,
    "lng": 77.0612909,
    "rating": 4.7,
    "ratingSource": "Google",
    "reviews": 295,
    "pincode": "122015",
    "phone": "+91 83979 70048",
    "phoneSource": "Google"
  },
  {
    "id": "g-1yqhqmqp-0",
    "type": "vet",
    "name": "Govt Veterinary Hospital",
    "area": "Chakkarpur",
    "tags": [
      "Clinic",
      "Hospital"
    ],
    "open24": false,
    "placeId": "ChIJU281J9gYDTkRK1yQhqMqP-0",
    "address": "356, Sector 28, Chakkarpur, Gurugram, Haryana 122002, India",
    "lat": 28.471970600000002,
    "lng": 77.090982,
    "rating": 3.7,
    "ratingSource": "Google",
    "reviews": 21,
    "pincode": "122002"
  },
  {
    "id": "g-3j1cxrhfa4",
    "type": "vet",
    "name": "PET CARE4SURE",
    "area": "Sector 24",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJOfjnMScZDTkRj3j1Cxrhfa4",
    "address": "Shop no - 2&3, GANGA APPARTMENTS, U-25 Rd, near CUT & STYLE, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122002, India",
    "lat": 28.4949354,
    "lng": 77.1001569,
    "rating": 4.5,
    "ratingSource": "Google",
    "reviews": 22,
    "pincode": "122002",
    "phone": "+91 82877 18294",
    "phoneSource": "Google"
  },
  {
    "id": "g-gcfqta4f0c",
    "type": "vet",
    "name": "Dog Broken Leg Treatment & Surgery",
    "area": "Sector 26",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJNz3XA4IZDTkRogcfqtA4F0c",
    "address": "F3FR+8WP Rapid Metro Station, A Block, DLF Phase 1, Sector 26, Gurugram, Haryana 122002, India",
    "lat": 28.4733364,
    "lng": 77.0923419,
    "pincode": "122002",
    "website": "https://deepetservices.com/blog/dog-broken-leg-treatment.php"
  },
  {
    "id": "g-74ylwixvfi",
    "type": "vet",
    "name": "Dr. Vaibhav Bishnoi",
    "area": "Chakkarpur",
    "tags": [
      "Clinic"
    ],
    "open24": false,
    "placeId": "ChIJexgDal4ZDTkRQ74ylwIXVfI",
    "address": "1SP, Ground Floor, Golf Crse Rd, Sector 28, Chakkarpur, Gurugram, Haryana 122002, India",
    "lat": 28.470636,
    "lng": 77.0934767,
    "rating": 4.3,
    "ratingSource": "Google",
    "reviews": 12,
    "pincode": "122002",
    "phone": "+91 89290 43121",
    "phoneSource": "Google",
    "website": "https://vetic.in/"
  },
  {
    "id": "g-gdyxumeciy",
    "type": "vet",
    "name": "Deluxe Pet Clinic",
    "area": "Sector 22",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ96VteW0ZDTkRygdYXumECIY",
    "address": "Shop no 21 Basement, Huda Market, Sector 22A, Sector 22, Gurugram, Haryana 122015, India",
    "lat": 28.503097000000004,
    "lng": 77.06266289999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 13,
    "pincode": "122015",
    "phone": "+91 99923 18402",
    "phoneSource": "Google"
  },
  {
    "id": "g-r6yek52qms",
    "type": "vet",
    "name": "Home Veterinary Services and Pet Vaccination",
    "area": "Sector 27",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJv_Mr0zUZDTkRnr6yek52QMs",
    "address": "B-7, Block B, Sushant Lok Phase I, Sector 27, Gurugram, Haryana 122009, India",
    "lat": 28.4676199,
    "lng": 77.07856230000002,
    "rating": 4.4,
    "ratingSource": "Google",
    "reviews": 53,
    "pincode": "122009",
    "phone": "+91 88269 65008",
    "phoneSource": "Google",
    "website": "https://monkoodog.com/"
  },
  {
    "id": "g-wt6eacigpm",
    "type": "vet",
    "name": "Wag N Wander",
    "area": "Sector 25",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJ0VPGeMoZDTkRgWT6eACIgPM",
    "address": "3, Mushedpur, DLF Phase 2, Sector 25, Gurugram, Haryana 122002, India",
    "lat": 28.486809400000002,
    "lng": 77.0838472,
    "pincode": "122002",
    "website": "https://wagnwanderwellness.com/"
  },
  {
    "id": "g-leazafcl4a",
    "type": "boarding",
    "name": "POSS - Pet's One Stop Solution",
    "area": "Sector 25",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ7ea3s4sZDTkRQlEAzafcl4A",
    "address": "38A, Jacaranda Marg, opposite to BSNL office, DLF Phase 2, Sector 25, Gurugram, Haryana 122002, India",
    "lat": 28.486595599999998,
    "lng": 77.0911832,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 57,
    "pincode": "122002",
    "phone": "+91 97735 55804",
    "phoneSource": "Google",
    "website": "https://sites.google.com/view/poss-pets-one-stop-solution/home"
  },
  {
    "id": "g-bbqo4pg_rw",
    "type": "boarding",
    "name": "Pet Grooming Studio",
    "area": "Sector 25",
    "tags": [
      "Boarding",
      "Grooming"
    ],
    "open24": false,
    "placeId": "ChIJe2-6Ut4ZDTkRaBbqO4PG_Rw",
    "address": "GF -121, Central Arcade, Mehrauli-Gurgaon Rd, DLF Phase 2, Sector 25, Gurugram, Haryana 122002, India",
    "lat": 28.481016399999998,
    "lng": 77.0856879,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 37,
    "pincode": "122002",
    "phone": "+91 97737 78205",
    "phoneSource": "Google",
    "website": "https://mgroad.petgroomingstudio.in/pets-care"
  },
  {
    "id": "g-lipvsx0cao",
    "type": "boarding",
    "name": "DHINGRA DLF PET CLINIC AND BOARDING CENTRE",
    "area": "Sector 25",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJ9596OiYZDTkRBLIpvSX0Cao",
    "address": "K 17/4A, DLF Phase 2, Sector 25, Gurugram, Haryana 122002, India",
    "lat": 28.4827636,
    "lng": 77.0813989,
    "rating": 3.8,
    "ratingSource": "Google",
    "reviews": 12,
    "pincode": "122002",
    "phone": "+91 98116 11402",
    "phoneSource": "Google"
  },
  {
    "id": "g-hv6ydbcwzo",
    "type": "boarding",
    "name": "Dudeandfortune",
    "area": "Palam Vihar Extension",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJq32iE00ZDTkR0hV6yDbcWZo",
    "address": "Palam Vihar Extension, Delhi, Gurugram, Haryana 122015, India",
    "lat": 28.496383500000004,
    "lng": 77.0593237,
    "pincode": "122015",
    "phone": "+91 93116 63364",
    "phoneSource": "Google",
    "website": "https://www.dudeandfortune.com/"
  },
  {
    "id": "g-jbhtah4_uw",
    "type": "boarding",
    "name": "Cat Boarding With Pinku",
    "area": "DLF Phase IV",
    "tags": [
      "Boarding",
      "Cats welcome"
    ],
    "open24": true,
    "placeId": "ChIJc-8baukZDTkRvJBhtaH4_Uw",
    "address": "3340, Chanderlok, DLF Phase IV, Gurugram, Haryana 122009, India",
    "lat": 28.4723996,
    "lng": 77.0802786,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 9,
    "pincode": "122009",
    "phone": "+91 63980 06200",
    "phoneSource": "Google"
  },
  {
    "id": "g-j3k2obtciu",
    "type": "vet",
    "name": "King Pet Clinic",
    "area": "Sector 23",
    "tags": [
      "Clinic"
    ],
    "open24": true,
    "placeId": "ChIJl_fx3j0ZDTkRpj3K2OBtCIU",
    "address": "Shop no 87, huda market, Cartarpuri Alias Daulatpur Nas, Huda, Sector 23, Gurugram, Haryana 122017, India",
    "lat": 28.510699,
    "lng": 77.04823569999999,
    "rating": 4,
    "ratingSource": "Google",
    "reviews": 4,
    "pincode": "122017"
  },
  {
    "id": "g-1-9wcogzd0",
    "type": "vet",
    "name": "The Paws Friend: pet services at home",
    "area": "Sector 23",
    "tags": [
      "Clinic",
      "Home visits"
    ],
    "open24": false,
    "placeId": "ChIJq3B9f1dI_agRh1-9WCogzd0",
    "address": "694, near Ansal Plaza, Choma, Sector 23, Gurugram, Haryana 122017, India",
    "lat": 28.5114567,
    "lng": 77.0419641,
    "rating": 4.6,
    "ratingSource": "Google",
    "reviews": 59,
    "pincode": "122017",
    "phone": "+91 88006 82777",
    "phoneSource": "Google",
    "website": "https://www.thepawsfriend.com/"
  },
  {
    "id": "g-zjn6epecrc",
    "type": "vet",
    "name": "24x7 pet Hospital",
    "area": "Sector 23A",
    "tags": [
      "Clinic",
      "24x7",
      "Hospital"
    ],
    "open24": true,
    "placeId": "ChIJN9LY1dMZDTkRtzJN6EPEcrc",
    "address": "1336, Sector 23A, Cartarpuri Alias Daulatpur Nas, Block F, Carterpuri Village, Sector 23A, Gurugram, Haryana 122017, India",
    "lat": 28.507556299999997,
    "lng": 77.04683849999999,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122017"
  },
  {
    "id": "g-rc8vkes-1u",
    "type": "boarding",
    "name": "FidoJet",
    "area": "Choma",
    "tags": [
      "Boarding"
    ],
    "open24": false,
    "placeId": "ChIJhcR_xN4EDTkR0rc8VkeS-1U",
    "address": "Plot No 240, Northern Peripheral Rd, Choma, Sector 112, New Palam Vihar Phase 2, Gurugram, Haryana 122017, India",
    "lat": 28.518235599999997,
    "lng": 77.0205441,
    "rating": 4.9,
    "ratingSource": "Google",
    "reviews": 268,
    "pincode": "122017",
    "phone": "+91 79829 70090",
    "phoneSource": "Google",
    "website": "http://fidojet.in/"
  },
  {
    "id": "g-fryx9s-zog",
    "type": "boarding",
    "name": "Pawfect Residency Pet Boarding",
    "area": "Sector 23",
    "tags": [
      "Boarding"
    ],
    "open24": true,
    "placeId": "ChIJExzJiBAZDTkRxfryx9s-ZOg",
    "address": "592, Cartarpuri Alias Daulatpur Nas, Sector 23, Gurugram, Haryana 122017, India",
    "lat": 28.5103437,
    "lng": 77.0451526,
    "rating": 5,
    "ratingSource": "Google",
    "reviews": 1,
    "pincode": "122017",
    "phone": "+91 75838 25050",
    "phoneSource": "Google"
  }
];
