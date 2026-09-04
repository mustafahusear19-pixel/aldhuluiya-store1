const TARGET_PHONE_NUMBER = "9647857381803";

// Database
const restaurantsData = {
    "ali_mandab": {
        name: "مطعم ومرطبات علي مندب",
        nameEn: "Ali Mandab Restaurant",
        logo: "🍦",
        phone: "07806675497",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.9",
        prepTime: "20-30 دقيقة",
        isOpen: true,
        categories: ["الكل", "العروض والصواني", "البركر", "صاج دجاج", "صاج كرسبي وزنجر", "كنتاكي", "الكص", "البيتزا", "الريزو", "آيس كريم", "العصائر", "وافل وكريب", "موهيتو وميلك شيك"],
        categoriesEn: ["All", "Offers & Trays", "Burgers", "Chicken Saj", "Crispy & Zinger Saj", "KFC", "Kass & Shawarma", "Pizza", "Rizo", "Ice Cream", "Juices", "Waffle & Crepe", "Mojito & Milkshake"],
        items: [
            { id: "am_1", name: "صينية عائلي مشكل (صاج + بركر)", nameEn: "Family Mixed Tray (Saj + Burger)", price: 10000, category: "العروض والصواني", isBestSeller: true },
            { id: "am_2", name: "صينية عائلي مشكل (صاج + كنتاكي)", nameEn: "Family Mixed Tray (Saj + KFC)", price: 10000, category: "العروض والصواني" },
            { id: "am_3", name: "صينية عائلي مشكل (صاج + ريزو)", nameEn: "Family Mixed Tray (Saj + Rizo)", price: 10000, category: "العروض والصواني" },
            { id: "am_4", name: "صينية عائلي مشكل (كنتاكي + بركر)", nameEn: "Family Mixed Tray (KFC + Burger)", price: 10000, category: "العروض والصواني" },
            { id: "am_5", name: "صينية عائلي مشكل (صاج دجاج + صاج كرسبي)", nameEn: "Family Mixed Tray (Chicken Saj + Crispy Saj)", price: 10000, category: "العروض والصواني" },
            { id: "am_6", name: "عرض بيتزا وسط + 20 قطعة صاج + فنكر + بيبسي + صلصات", nameEn: "Offer: Medium Pizza + 20 Saj + Fries + Pepsi", price: 15000, category: "العروض والصواني", isBestSeller: true },
            { id: "am_7", name: "عرض بيتزا وسط + 7 قطع صاج + 3 قطع كرسبي + فنكر + بيبسي", nameEn: "Offer: Medium Pizza + 7 Saj + 3 Crispy + Fries", price: 13000, category: "العروض والصواني" },
            { id: "am_9", name: "بركر لحم كلاسيك", nameEn: "Classic Beef Burger", price: 2000, category: "البركر" },
            { id: "am_10", name: "بركر دجاج كلاسيك", nameEn: "Classic Chicken Burger", price: 2000, category: "البركر" },
            { id: "am_11", name: "بركر شيتوز", nameEn: "Cheetos Burger", price: 5000, category: "البركر" },
            { id: "am_12", name: "صينية بركر عائلي (24 قطعة)", nameEn: "Family Burger Tray (24 pcs)", price: 10000, category: "البركر" },
            { id: "am_13", name: "لفة صاج دجاج", nameEn: "Chicken Saj Roll", price: 2000, category: "صاج دجاج", isBestSeller: true },
            { id: "am_14", name: "وجبة صاج دجاج وسط", nameEn: "Chicken Saj Medium Meal", price: 5000, category: "صاج دجاج" },
            { id: "am_15", name: "صاج دجاج عائلي (30 قطعة)", nameEn: "Family Chicken Saj (30 pcs)", price: 10000, category: "صاج دجاج" },
            { id: "am_16", name: "صاج دجاج عائلي دبل (40 قطعة)", nameEn: "Family Chicken Saj Double (40 pcs)", price: 15000, category: "صاج دجاج" },
            { id: "am_17", name: "لفة صاج كرسبي", nameEn: "Crispy Saj Roll", price: 3500, category: "صاج كرسبي وزنجر" },
            { id: "am_18", name: "لفة زنجر صاج", nameEn: "Zinger Saj Roll", price: 3500, category: "صاج كرسبي وزنجر" },
            { id: "am_19", name: "وجبة صاج كرسبي", nameEn: "Crispy Saj Meal", price: 5000, category: "صاج كرسبي وزنجر" },
            { id: "am_20", name: "صاج كرسبي عائلي", nameEn: "Family Crispy Saj", price: 10000, category: "صاج كرسبي وزنجر" },
            { id: "am_21", name: "صاج كرسبي عائلي دبل", nameEn: "Family Crispy Saj Double", price: 15000, category: "صاج كرسبي وزنجر" },
            { id: "am_22", name: "كنتاكي (2 قطع)", nameEn: "KFC (2 pcs)", price: 4000, category: "كنتاكي" },
            { id: "am_23", name: "كنتاكي (3 قطع)", nameEn: "KFC (3 pcs)", price: 5000, category: "كنتاكي" },
            { id: "am_24", name: "كنتاكي (6 قطع)", nameEn: "KFC (6 pcs)", price: 10000, category: "كنتاكي" },
            { id: "am_25", name: "كنتاكي (9 قطع)", nameEn: "KFC (9 pcs)", price: 15000, category: "كنتاكي" },
            { id: "am_26", name: "لفة قص", nameEn: "Kass Roll", price: 2000, category: "الكص" },
            { id: "am_27", name: "نص نفر قص", nameEn: "Half Kass", price: 5000, category: "الكص" },
            { id: "am_28", name: "نفر قص عائلي", nameEn: "Family Kass", price: 10000, category: "الكص" },
            { id: "am_29", name: "بيتزا وسط مشكلة", nameEn: "Mixed Medium Pizza", price: 8000, category: "البيتزا" },
            { id: "am_30", name: "بيتزا صغير مشكل", nameEn: "Mixed Small Pizza", price: 6000, category: "البيتزا" },
            { id: "am_31", name: "بيتزا صغير خضار", nameEn: "Vegetable Small Pizza", price: 6000, category: "البيتزا" },
            { id: "am_32", name: "بيتزا وسط مارغريتا", nameEn: "Margherita Medium Pizza", price: 8000, category: "البيتزا" },
            { id: "am_33", name: "بيتزا عائلي مشكل", nameEn: "Family Mixed Pizza", price: 10000, category: "البيتزا" },
            { id: "am_34", name: "بيتزا دبل مشكل", nameEn: "Double Mixed Pizza", price: 12000, category: "البيتزا" },
            { id: "am_40", name: "وجبة ريزو", nameEn: "Rizo Meal", price: 5000, category: "الريزو" },
            { id: "am_41", name: "ريزو عائلي", nameEn: "Family Rizo", price: 10000, category: "الريزو" },
            { id: "am_42", name: "ريزو عائلي دبل", nameEn: "Family Rizo Double", price: 15000, category: "الريزو" },
            { id: "am_43", name: "آيس كريم صغير", nameEn: "Small Ice Cream", price: 1000, category: "آيس كريم" },
            { id: "am_44", name: "آيس كريم وسط", nameEn: "Medium Ice Cream", price: 1500, category: "آيس كريم" },
            { id: "am_45", name: "آيس كريم كبير", nameEn: "Large Ice Cream", price: 2000, category: "آيس كريم" },
            { id: "am_46", name: "آيس كريم عائلي", nameEn: "Family Ice Cream", price: 5000, category: "آيس كريم" },
            { id: "am_35", name: "عصير برتقال طبيعي (وسط)", nameEn: "Fresh Orange Juice (Medium)", price: 2000, category: "العصائر", dietary: "healthy" },
            { id: "am_47", name: "عصير طبيعي صغير", nameEn: "Small Fresh Juice", price: 1000, category: "العصائر", dietary: "healthy" },
            { id: "am_48", name: "عصير طبيعي كبير", nameEn: "Large Fresh Juice", price: 3000, category: "العصائر", dietary: "healthy" },
            { id: "am_49", name: "وافل", nameEn: "Waffle", price: 4000, category: "وافل وكريب" },
            { id: "am_50", name: "كريب", nameEn: "Crepe", price: 4000, category: "وافل وكريب" },
            { id: "am_51", name: "وافل دبل", nameEn: "Double Waffle", price: 6000, category: "وافل وكريب" },
            { id: "am_52", name: "كريب دبل", nameEn: "Double Crepe", price: 8000, category: "وافل وكريب" },
            { id: "am_53", name: "موهيتو", nameEn: "Mojito", price: 2500, category: "موهيتو وميلك شيك" },
            { id: "am_54", name: "ميلك شيك", nameEn: "Milkshake", price: 3000, category: "موهيتو وميلك شيك" }
        ]
    },
    "blue_dome": {
        name: "كافيه ومطعم بلو دوم",
        nameEn: "Blue Dome Café",
        logo: "🏛️",
        phone: "07770000409",
        location: "الضلوعية",
        rating: "4.8",
        prepTime: "15-25 دقيقة",
        isOpen: true,
        categories: ["الكل", "بركر لحوم", "بركر دجاج وسندويشات", "ريزو وأجنحة", "قهوة ومشروبات"],
        categoriesEn: ["All", "Beef Burgers", "Chicken Burgers & Sandwiches", "Rizo & Wings", "Coffee & Drinks"],
        items: [
            { id: "bd_1", name: "كلاسيك بركر لحم", nameEn: "Classic Beef Burger", price: 4000, category: "بركر لحوم", isBestSeller: true },
            { id: "bd_2", name: "كلاسيك بركر لحم (وجبة)", nameEn: "Classic Beef Burger (Meal)", price: 5500, category: "بركر لحوم" },
            { id: "bd_3", name: "سموك بركر", nameEn: "Smoke Burger", price: 4000, category: "بركر لحوم" },
            { id: "bd_4", name: "سموك بركر (وجبة)", nameEn: "Smoke Burger (Meal)", price: 5500, category: "بركر لحوم" },
            { id: "bd_5", name: "مربى الكرز بركر", nameEn: "Cherry Jam Burger", price: 4500, category: "بركر لحوم" },
            { id: "bd_6", name: "مربى الكرز بركر (وجبة)", nameEn: "Cherry Jam Burger (Meal)", price: 6000, category: "بركر لحوم" },
            { id: "bd_7", name: "تربل جبن بركر", nameEn: "Triple Cheese Burger", price: 6000, category: "بركر لحوم" },
            { id: "bd_8", name: "تربل جبن بركر (وجبة)", nameEn: "Triple Cheese Burger (Meal)", price: 7500, category: "بركر لحوم" },
            { id: "bd_9", name: "بلوم دوم بركر", nameEn: "Blue Dome Burger", price: 6000, category: "بركر لحوم", isBestSeller: true },
            { id: "bd_10", name: "بلوم دوم بركر (وجبة)", nameEn: "Blue Dome Burger (Meal)", price: 7500, category: "بركر لحوم" },
            { id: "bd_12", name: "بركر دجاج كلاسيك", nameEn: "Classic Chicken Burger", price: 3500, category: "بركر دجاج وسندويشات" },
            { id: "bd_13", name: "بركر دجاج كلاسيك (وجبة)", nameEn: "Classic Chicken Burger (Meal)", price: 5000, category: "بركر دجاج وسندويشات" },
            { id: "bd_14", name: "ستيك بركر دجاج", nameEn: "Steak Chicken Burger", price: 3500, category: "بركر دجاج وسندويشات" },
            { id: "bd_16", name: "ستيك بركر دجاج (وجبة)", nameEn: "Steak Chicken Burger (Meal)", price: 5000, category: "بركر دجاج وسندويشات" },
            { id: "bd_17", name: "ساندويش زنجر", nameEn: "Zinger Sandwich", price: 3500, category: "بركر دجاج وسندويشات" },
            { id: "bd_18", name: "ساندويش مطافي", nameEn: "Mutafay Sandwich", price: 3500, category: "بركر دجاج وسندويشات" },
            { id: "bd_19", name: "ساندويش مايتي", nameEn: "Mighty Sandwich", price: 4000, category: "بركر دجاج وسندويشات" },
            { id: "bd_20", name: "ساندويش كرانشي", nameEn: "Crunchy Sandwich", price: 4000, category: "بركر دجاج وسندويشات" },
            { id: "bd_21", name: "وجبة زنجر", nameEn: "Zinger Meal", price: 5000, category: "بركر دجاج وسندويشات" },
            { id: "bd_22", name: "وجبة مايتي", nameEn: "Mighty Meal", price: 5500, category: "بركر دجاج وسندويشات" },
            { id: "bd_23", name: "وجبة كرانشي", nameEn: "Crunchy Meal", price: 5500, category: "بركر دجاج وسندويشات" },
            { id: "bd_24", name: "تويستر", nameEn: "Twister", price: 4000, category: "بركر دجاج وسندويشات" },
            { id: "bd_25", name: "تويستر (وجبة)", nameEn: "Twister (Meal)", price: 5500, category: "بركر دجاج وسندويشات" },
            { id: "bd_26", name: "شاورما دجاج (ساندويش / صاج)", nameEn: "Chicken Shawarma (Sandwich / Saj)", price: 2500, category: "بركر دجاج وسندويشات" },
            { id: "bd_11", name: "ريزو دجاج صحي", nameEn: "Healthy Chicken Rizo", price: 4500, category: "ريزو وأجنحة", dietary: "healthy" },
            { id: "bd_27", name: "أجنحة كلاسيك", nameEn: "Classic Wings", price: 3500, category: "ريزو وأجنحة" },
            { id: "bd_28", name: "أجنحة هني ماسترد", nameEn: "Honey Mustard Wings", price: 3500, category: "ريزو وأجنحة" },
            { id: "bd_29", name: "أجنحة سموك", nameEn: "Smoke Wings", price: 3500, category: "ريزو وأجنحة" },
            { id: "bd_30", name: "أجنحة بافلو", nameEn: "Buffalo Wings", price: 3500, category: "ريزو وأجنحة" },
            { id: "bd_31", name: "أجنحة مقرمشة (وجبة)", nameEn: "Crispy Wings (Meal)", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_32", name: "ريزو كلاسيك", nameEn: "Classic Rizo", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_33", name: "ريزو هني ماسترد", nameEn: "Honey Mustard Rizo", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_34", name: "ريزو جبن مدخن", nameEn: "Smoked Cheese Rizo", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_35", name: "ريزو هالابينو", nameEn: "Jalapeno Rizo", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_36", name: "جكن فرايز", nameEn: "Chicken Fries", price: 4000, category: "ريزو وأجنحة" },
            { id: "bd_37", name: "تاهو فنكر", nameEn: "Tofu Fries", price: 5000, category: "ريزو وأجنحة" },
            { id: "bd_15", name: "كابتشينو ساخن", nameEn: "Hot Cappuccino", price: 2500, category: "قهوة ومشروبات" },
            { id: "bd_38", name: "اسبريسو", nameEn: "Espresso", price: 2000, category: "قهوة ومشروبات" },
            { id: "bd_39", name: "لاتيه ساخن", nameEn: "Hot Latte", price: 2500, category: "قهوة ومشروبات" },
            { id: "bd_40", name: "موكا ساخنة", nameEn: "Hot Mocha", price: 3000, category: "قهوة ومشروبات" },
            { id: "bd_41", name: "ايس لاتيه (وسط)", nameEn: "Iced Latte (Medium)", price: 3000, category: "قهوة ومشروبات" },
            { id: "bd_42", name: "ايس لاتيه (كبير)", nameEn: "Iced Latte (Large)", price: 4000, category: "قهوة ومشروبات" },
            { id: "bd_43", name: "سبانيش لاتيه (وسط)", nameEn: "Spanish Latte (Medium)", price: 3500, category: "قهوة ومشروبات" },
            { id: "bd_44", name: "سبانيش لاتيه (كبير)", nameEn: "Spanish Latte (Large)", price: 4500, category: "قهوة ومشروبات" },
            { id: "bd_45", name: "بلو دوم لاتيه (وسط)", nameEn: "Blue Dome Latte (Medium)", price: 4000, category: "قهوة ومشروبات" },
            { id: "bd_46", name: "بلو دوم لاتيه (كبير)", nameEn: "Blue Dome Latte (Large)", price: 5000, category: "قهوة ومشروبات" },
            { id: "bd_47", name: "موهيتو", nameEn: "Mojito", price: 2500, category: "قهوة ومشروبات" },
            { id: "bd_48", name: "سموذي", nameEn: "Smoothie", price: 3000, category: "قهوة ومشروبات" },
            { id: "bd_49", name: "عصير طبيعي", nameEn: "Fresh Juice", price: 2500, category: "قهوة ومشروبات", dietary: "healthy" },
            { id: "bd_50", name: "ميلك شيك نوتيلا", nameEn: "Nutella Milkshake", price: 3500, category: "قهوة ومشروبات" },
            { id: "bd_51", name: "ميلك شيك اوريو", nameEn: "Oreo Milkshake", price: 3500, category: "قهوة ومشروبات" },
            { id: "bd_52", name: "ميلك شيك لوتس", nameEn: "Lotus Milkshake", price: 3500, category: "قهوة ومشروبات" },
            { id: "bd_53", name: "ميلك شيك بستاشيو", nameEn: "Pistachio Milkshake", price: 3500, category: "قهوة ومشروبات" }
        ]
    },
    "sixty_six_grill": {
        name: "مطعم 66 GRILL",
        nameEn: "66 GRILL Restaurant",
        logo: "🍔",
        phone: "",
        location: "الضلوعية",
        rating: "4.8",
        prepTime: "15-25 دقيقة",
        isOpen: true,
        categories: ["الكل", "بركر لحم", "بركر دجاج", "سندويشات وصاج", "شاورما على الفحم", "كنتاكي وريزو", "مقبلات", "مشروبات"],
        categoriesEn: ["All", "Beef Burgers", "Chicken Burgers", "Sandwiches & Saj", "Charcoal Shawarma", "KFC & Rizo", "Appetizers", "Drinks"],
        items: [
            { id: "s6_1", name: "بركر لحم", nameEn: "Beef Burger", price: 3000, category: "بركر لحم" },
            { id: "s6_2", name: "بركر لحم (وجبة)", nameEn: "Beef Burger (Meal)", price: 5000, category: "بركر لحم" },
            { id: "s6_3", name: "بركر لحم بلجبن", nameEn: "Beef Cheeseburger", price: 3500, category: "بركر لحم" },
            { id: "s6_4", name: "بركر لحم بلجبن (وجبة)", nameEn: "Beef Cheeseburger (Meal)", price: 5000, category: "بركر لحم" },
            { id: "s6_5", name: "بركر لحم دبل", nameEn: "Double Beef Burger", price: 5000, category: "بركر لحم" },
            { id: "s6_6", name: "بركر لحم دبل (وجبة)", nameEn: "Double Beef Burger (Meal)", price: 6000, category: "بركر لحم" },
            { id: "s6_7", name: "بركر لحم دبل بلجبن", nameEn: "Double Beef Cheeseburger", price: 5500, category: "بركر لحم" },
            { id: "s6_8", name: "بركر لحم دبل بلجبن (وجبة)", nameEn: "Double Beef Cheeseburger (Meal)", price: 6500, category: "بركر لحم" },
            { id: "s6_9", name: "مشروم بركر", nameEn: "Mushroom Burger", price: 4000, category: "بركر لحم" },
            { id: "s6_10", name: "مشروم بركر (وجبة)", nameEn: "Mushroom Burger (Meal)", price: 6000, category: "بركر لحم" },
            { id: "s6_11", name: "هيمي بركر لحم", nameEn: "Heavy Beef Burger", price: 4500, category: "بركر لحم" },
            { id: "s6_12", name: "سبشل بركر لحم", nameEn: "Special Beef Burger", price: 6000, category: "بركر لحم", isBestSeller: true },
            { id: "s6_13", name: "اورجينال بركر لحم", nameEn: "Original Beef Burger", price: 5000, category: "بركر لحم" },
            { id: "s6_14", name: "اورجينال بركر لحم (وجبة)", nameEn: "Original Beef Burger (Meal)", price: 6000, category: "بركر لحم" },
            { id: "s6_15", name: "شيتوس بركر لحم", nameEn: "Cheetos Beef Burger", price: 5000, category: "بركر لحم" },
            { id: "s6_16", name: "بركر لحم 66 الخاص", nameEn: "66 Special Beef Burger", price: 7000, category: "بركر لحم", isBestSeller: true },
            { id: "s6_17", name: "سماش بركر", nameEn: "Smash Burger", price: 5000, category: "بركر لحم" },
            { id: "s6_18", name: "بركر دجاج", nameEn: "Chicken Burger", price: 2500, category: "بركر دجاج" },
            { id: "s6_19", name: "بركر دجاج (وجبة)", nameEn: "Chicken Burger (Meal)", price: 3500, category: "بركر دجاج" },
            { id: "s6_20", name: "بركر دجاج بلجبن", nameEn: "Chicken Cheeseburger", price: 3000, category: "بركر دجاج" },
            { id: "s6_21", name: "بركر دجاج بلجبن (وجبة)", nameEn: "Chicken Cheeseburger (Meal)", price: 4000, category: "بركر دجاج" },
            { id: "s6_22", name: "بركر دجاج دبل", nameEn: "Double Chicken Burger", price: 4000, category: "بركر دجاج" },
            { id: "s6_23", name: "بركر دجاج دبل (وجبة)", nameEn: "Double Chicken Burger (Meal)", price: 5000, category: "بركر دجاج" },
            { id: "s6_24", name: "بركر دجاج دبل بلجبن", nameEn: "Double Chicken Cheeseburger", price: 4000, category: "بركر دجاج" },
            { id: "s6_25", name: "بركر دجاج دبل بلجبن (وجبة)", nameEn: "Double Chicken Cheeseburger (Meal)", price: 5000, category: "بركر دجاج" },
            { id: "s6_26", name: "شيتوس بركر دجاج", nameEn: "Cheetos Chicken Burger", price: 5000, category: "بركر دجاج" },
            { id: "s6_27", name: "زنجر", nameEn: "Zinger", price: 3500, category: "سندويشات وصاج" },
            { id: "s6_28", name: "كرسبي", nameEn: "Crispy", price: 3500, category: "سندويشات وصاج" },
            { id: "s6_29", name: "فلر", nameEn: "Filler", price: 4000, category: "سندويشات وصاج" },
            { id: "s6_30", name: "إسكالوب", nameEn: "Escalope", price: 4000, category: "سندويشات وصاج" },
            { id: "s6_31", name: "صاج كرسبي", nameEn: "Crispy Saj", price: 3500, category: "سندويشات وصاج" },
            { id: "s6_32", name: "وجبة صاج كرسبي صغير", nameEn: "Small Crispy Saj Meal", price: 5000, category: "سندويشات وصاج" },
            { id: "s6_33", name: "وجبة صاج كرسبي عائلي", nameEn: "Family Crispy Saj Meal", price: 10000, category: "سندويشات وصاج" },
            { id: "s6_34", name: "صاج شاورما دجاج", nameEn: "Chicken Shawarma Saj", price: 2500, category: "شاورما على الفحم" },
            { id: "s6_35", name: "لفة شاورما دجاج", nameEn: "Chicken Shawarma Roll", price: 3000, category: "شاورما على الفحم" },
            { id: "s6_36", name: "وجبة شاورما دجاج عالفحم", nameEn: "Charcoal Chicken Shawarma Meal", price: 5000, category: "شاورما على الفحم" },
            { id: "s6_37", name: "وجبة شاورما دجاج عائلي", nameEn: "Family Chicken Shawarma Meal", price: 10000, category: "شاورما على الفحم" },
            { id: "s6_38", name: "وجبة 66 الخاصة", nameEn: "66 Special Meal", price: 5000, category: "شاورما على الفحم", isBestSeller: true },
            { id: "s6_39", name: "وجبة شاورما دجاج عائلي دبل", nameEn: "Family Shawarma Meal Double", price: 15000, category: "شاورما على الفحم" },
            { id: "s6_40", name: "ربع كيلو دجاج", nameEn: "Quarter Kilo Chicken", price: 8000, category: "شاورما على الفحم" },
            { id: "s6_41", name: "نص كيلو دجاج", nameEn: "Half Kilo Chicken", price: 17000, category: "شاورما على الفحم" },
            { id: "s6_42", name: "كيلو دجاج", nameEn: "One Kilo Chicken", price: 25000, category: "شاورما على الفحم" },
            { id: "s6_43", name: "وجبة كنتاكي 3 قطع", nameEn: "KFC Meal (3 pcs)", price: 6000, category: "كنتاكي وريزو" },
            { id: "s6_44", name: "وجبة كنتاكي 5 قطع", nameEn: "KFC Meal (5 pcs)", price: 9000, category: "كنتاكي وريزو" },
            { id: "s6_45", name: "وجبة كنتاكي 10 قطع", nameEn: "KFC Meal (10 pcs)", price: 16000, category: "كنتاكي وريزو" },
            { id: "s6_46", name: "وجبة ستربس 4 قطع", nameEn: "Strips Meal (4 pcs)", price: 6000, category: "كنتاكي وريزو" },
            { id: "s6_47", name: "وجبة ستربس 6 قطع", nameEn: "Strips Meal (6 pcs)", price: 8000, category: "كنتاكي وريزو" },
            { id: "s6_48", name: "وجبة ستربس 12 قطعة", nameEn: "Strips Meal (12 pcs)", price: 15000, category: "كنتاكي وريزو" },
            { id: "s6_49", name: "ريزو مقرمش", nameEn: "Crispy Rizo", price: 5000, category: "كنتاكي وريزو" },
            { id: "s6_50", name: "ريزو مقرمش عائلي", nameEn: "Family Crispy Rizo", price: 10000, category: "كنتاكي وريزو" },
            { id: "s6_51", name: "ريزو شاورما", nameEn: "Shawarma Rizo", price: 5000, category: "كنتاكي وريزو" },
            { id: "s6_52", name: "ريزو شاورما عائلي", nameEn: "Family Shawarma Rizo", price: 10000, category: "كنتاكي وريزو" },
            { id: "s6_53", name: "صحن فنكر", nameEn: "Fries Plate", price: 3500, category: "مقبلات" },
            { id: "s6_54", name: "فنكر بلجبن (صغير)", nameEn: "Cheese Fries (Small)", price: 1500, category: "مقبلات" },
            { id: "s6_55", name: "فنكر بلجبن (كبير)", nameEn: "Cheese Fries (Large)", price: 3500, category: "مقبلات" },
            { id: "s6_56", name: "مقبلات صغير", nameEn: "Small Appetizer", price: 1500, category: "مقبلات" },
            { id: "s6_57", name: "مقبلات وسط", nameEn: "Medium Appetizer", price: 2500, category: "مقبلات" },
            { id: "s6_58", name: "مقبلات كبير", nameEn: "Large Appetizer", price: 4000, category: "مقبلات" },
            { id: "s6_59", name: "بيبسي / سفن", nameEn: "Pepsi / 7Up", price: 500, category: "مشروبات" },
            { id: "s6_60", name: "ماء", nameEn: "Water", price: 250, category: "مشروبات" }
        ]
    },
    "yalia_eat": {
        name: "مطعم يلا ايت",
        nameEn: "Yalia Eat Restaurant",
        logo: "🍽️",
        phone: "",
        location: "الضلوعية",
        rating: "4.7",
        prepTime: "20-35 دقيقة",
        isOpen: true,
        categories: ["الكل", "الشاورما والشرقية", "الغربية والبركر", "الصاج والكنتاكي", "البيتزا"],
        categoriesEn: ["All", "Shawarma & Oriental", "Western & Burgers", "Saj & KFC", "Pizza"],
        items: [
            { id: "ye_1", name: "شاورما لحم", nameEn: "Beef Shawarma", price: 3500, category: "الشاورما والشرقية", isBestSeller: true },
            { id: "ye_2", name: "شاورما دجاج", nameEn: "Chicken Shawarma", price: 3000, category: "الشاورما والشرقية" },
            { id: "ye_3", name: "كيلو شاورما لحم", nameEn: "Kilo Beef Shawarma", price: 45000, category: "الشاورما والشرقية" },
            { id: "ye_4", name: "كيلو شاورما دجاج", nameEn: "Kilo Chicken Shawarma", price: 25000, category: "الشاورما والشرقية" },
            { id: "ye_5", name: "نفر مندي لحم", nameEn: "Mandi Beef Portion", price: 16000, category: "الشاورما والشرقية" },
            { id: "ye_6", name: "نفر مندي دجاج", nameEn: "Mandi Chicken Portion", price: 10000, category: "الشاورما والشرقية" },
            { id: "ye_7", name: "مناسف عائلية", nameEn: "Family Mansaf", price: 16000, category: "الشاورما والشرقية" },
            { id: "ye_8", name: "صحن كبسة", nameEn: "Kabsa Plate", price: 15000, category: "الشاورما والشرقية" },
            { id: "ye_9", name: "كبسة صغير", nameEn: "Small Kabsa", price: 7000, category: "الشاورما والشرقية" },
            { id: "ye_10", name: "ستيك", nameEn: "Steak", price: 10000, category: "الغربية والبركر" },
            { id: "ye_11", name: "شيش طاووق", nameEn: "Shish Tawook", price: 10000, category: "الغربية والبركر" },
            { id: "ye_12", name: "كولدن بلو", nameEn: "Golden Blue", price: 10000, category: "الغربية والبركر" },
            { id: "ye_13", name: "فاهيتا", nameEn: "Fajita", price: 10000, category: "الغربية والبركر" },
            { id: "ye_14", name: "فيتوتشيني", nameEn: "Fettuccine", price: 10000, category: "الغربية والبركر" },
            { id: "ye_15", name: "سمك", nameEn: "Fish", price: 11000, category: "الغربية والبركر" },
            { id: "ye_16", name: "طبق غربي مشكل", nameEn: "Mixed Western Plate", price: 25000, category: "الغربية والبركر" },
            { id: "ye_17", name: "بركر لحم (ساندويش)", nameEn: "Beef Burger (Sandwich)", price: 2000, category: "الغربية والبركر" },
            { id: "ye_18", name: "بركر دجاج (ساندويش)", nameEn: "Chicken Burger (Sandwich)", price: 2000, category: "الغربية والبركر" },
            { id: "ye_19", name: "وجبة بركر لحم", nameEn: "Beef Burger Meal", price: 3000, category: "الغربية والبركر" },
            { id: "ye_20", name: "وجبة بركر دجاج", nameEn: "Chicken Burger Meal", price: 3000, category: "الغربية والبركر" },
            { id: "ye_21", name: "بركر خاص", nameEn: "Special Burger", price: 6500, category: "الغربية والبركر" },
            { id: "ye_22", name: "وجبة بركر خاص", nameEn: "Special Burger Meal", price: 7500, category: "الغربية والبركر" },
            { id: "ye_23", name: "بوكس ميني بركر", nameEn: "Mini Burger Box", price: 12000, category: "الغربية والبركر" },
            { id: "ye_24", name: "صاج سوري لحم", nameEn: "Syrian Saj Beef", price: 2500, category: "الصاج والكنتاكي" },
            { id: "ye_25", name: "صاج سوري دجاج", nameEn: "Syrian Saj Chicken", price: 2500, category: "الصاج والكنتاكي" },
            { id: "ye_26", name: "صاج سوري كرسبي", nameEn: "Syrian Saj Crispy", price: 3000, category: "الصاج والكنتاكي" },
            { id: "ye_27", name: "صاج سوري فاهيتا", nameEn: "Syrian Saj Fajita", price: 3000, category: "الصاج والكنتاكي" },
            { id: "ye_28", name: "وجبة صاج سوري", nameEn: "Syrian Saj Meal", price: 5000, category: "الصاج والكنتاكي" },
            { id: "ye_29", name: "صاج عائلي", nameEn: "Family Saj", price: 10000, category: "الصاج والكنتاكي" },
            { id: "ye_30", name: "صاج عائلي دبل", nameEn: "Family Saj Double", price: 15000, category: "الصاج والكنتاكي" },
            { id: "ye_31", name: "كنتاكي 3 قطع", nameEn: "KFC (3 pcs)", price: 6000, category: "الصاج والكنتاكي" },
            { id: "ye_32", name: "كنتاكي 5 قطع", nameEn: "KFC (5 pcs)", price: 9000, category: "الصاج والكنتاكي" },
            { id: "ye_33", name: "كنتاكي 10 قطع", nameEn: "KFC (10 pcs)", price: 17000, category: "الصاج والكنتاكي" },
            { id: "ye_34", name: "بروستد ع التمن", nameEn: "Broasted with Rice", price: 15000, category: "الصاج والكنتاكي" },
            { id: "ye_35", name: "بيتزا دجاج", nameEn: "Chicken Pizza", price: 6000, category: "البيتزا" },
            { id: "ye_36", name: "بيتزا لحم", nameEn: "Beef Pizza", price: 6000, category: "البيتزا" },
            { id: "ye_37", name: "بيتزا كرسبي", nameEn: "Crispy Pizza", price: 6000, category: "البيتزا" },
            { id: "ye_38", name: "بيتزا خضار", nameEn: "Vegetable Pizza", price: 6000, category: "البيتزا" },
            { id: "ye_39", name: "بيتزا مارغريتا", nameEn: "Margherita Pizza", price: 6000, category: "البيتزا" },
            { id: "ye_40", name: "بيتزا مشكل وسط", nameEn: "Mixed Medium Pizza", price: 9000, category: "البيتزا" },
            { id: "ye_41", name: "بيتزا مشكل كبير", nameEn: "Mixed Large Pizza", price: 13000, category: "البيتزا" },
            { id: "ye_42", name: "بيتزا يلا ايت الخاصة", nameEn: "Yalia Eat Special Pizza", price: 15000, category: "البيتزا", isBestSeller: true }
        ]
    }
};

const groceryData = {
    categories: ["الكل", "فواكه وخضروات", "ألبان وأجبان", "مشروبات وحلويات"],
    categoriesEn: ["الكل", "Fruits & Vegetables", "Dairy & Cheese", "Drinks & Sweets"],
    items: [
        { id: "g_1", name: "طماطم طازجة (1 كغم)", nameEn: "Fresh Tomatoes (1kg)", price: 1250, category: "فواكه وخضروات" },
        { id: "g_2", name: "خيار طازج (1 كغم)", nameEn: "Fresh Cucumbers (1kg)", price: 1000, category: "فواكه وخضروات" },
        { id: "g_4", name: "حليب كالي (1 لتر)", nameEn: "Milk (1 Liter)", price: 1500, category: "ألبان وأجبان" },
        { id: "g_11", name: "بيبسي علبة 330 مل", nameEn: "Pepsi Can 330ml", price: 500, category: "مشروبات وحلويات" }
    ]
};

// State
let currentMainTab = "restaurants";
let currentRestaurantKey = "ali_mandab";
let currentCategory = "الكل";
let currentGroceryCategory = "الكل";
let searchQuery = "";
let cart = [];
let activeDiscount = 0;
let userPoints = 150;
let pendingCustomItem = null;

let popSound;
try {
    popSound = new Howler.Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], volume: 0.3 });
} catch (e) { popSound = { play: () => {} }; }

// ======== حالات الميزات الجديدة ========
let currentLang = localStorage.getItem("dhilo_lang") || "ar";
let favorites = [];
let favFilterActive = false;
let currentRestaurantCategoriesEn = [];

function loadStoredArray(key) { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; } }
function storeArray(key, arr) { try { localStorage.setItem(key, JSON.stringify(arr)); } catch (e) {} }

window.onload = () => {
    loadCartFromStorage();
    loadUserPoints();
    loadFavorites();
    renderRestaurantTabs();
    selectRestaurant(currentRestaurantKey);
    renderGroceryItems();
    setupCartModalOutsideClick();
    setDynamicGreeting();
    applyStoredLanguage();
    checkDarkModePreference();
    renderAnnouncementBar();
    initCountdown();
    initBackToTop();
    initReadingProgress();
    initSocialProof();
    initExitIntent();
    initHighlightShare();
    initCookieBanner();
    renderQuickPoll();
    renderGroupCalculator();
    renderNewsletter();
    renderReferral();
    initConnectionMonitor();
    restoreTracking();
    initAdminSync();
};

function setDynamicGreeting() {
    const hour = new Date().getHours();
    const el = document.getElementById("dynamic-greeting");
    if (!el) return;
    if (hour < 12) el.innerText = "صباح الخير والبركة ☀️";
    else if (hour < 18) el.innerText = "مساء الخير والسرور 🌤️";
    else el.innerText = "مساء الأنوار 🌙";
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    document.getElementById("theme-icon").className = isDark ? "fa-solid fa-sun text-amber-400" : "fa-solid fa-moon";
    localStorage.setItem("dhilo_theme", isDark ? "dark" : "light");
}

function checkDarkModePreference() {
    const saved = localStorage.getItem("dhilo_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (saved === null && prefersDark)) {
        document.documentElement.classList.add("dark");
        const icon = document.getElementById("theme-icon");
        if (icon) icon.className = "fa-solid fa-sun text-amber-400";
    }
}

function switchMainTab(tab) {
    popSound.play();
    currentMainTab = tab;
    document.querySelectorAll('.main-service-card').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.service-section').forEach(sec => sec.classList.add('hidden'));

    const activeNavBtn = document.getElementById(`nav-btn-${tab}`);
    if(activeNavBtn) activeNavBtn.classList.add('active');
    
    const activeSec = document.getElementById(`section-${tab}`);
    if(activeSec) activeSec.classList.remove('hidden');
}

function renderRestaurantTabs() {
    const el = document.getElementById("restaurant-tabs");
    if (!el) return;
    el.innerHTML = "";
    Object.keys(restaurantsData).forEach(key => {
        const rest = restaurantsData[key];
        const isActive = key === currentRestaurantKey;
        const btn = document.createElement("button");
        btn.className = `px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition border ${
            isActive ? "bg-brand-600 text-white border-brand-600 shadow-sm" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
        }`;
        btn.innerHTML = `${rest.logo} ${rest.name}`;
        btn.onclick = () => selectRestaurant(key);
        el.appendChild(btn);
    });
}

function selectRestaurant(key) {
    currentRestaurantKey = key;
    currentCategory = "الكل";
    renderRestaurantTabs();
    renderRestaurantInfo();
    renderCategoryTabs();
    renderMenuItems();
}

function renderRestaurantInfo() {
    const rest = restaurantsData[currentRestaurantKey];
    const infoEl = document.getElementById("restaurant-info");
    if (!infoEl || !rest) return;
    const distName = currentLang === "en" && rest.nameEn ? rest.nameEn : rest.name;
    const catsCount = rest.categories.length - 1;
    const bestSellers = rest.items.filter(i => i.isBestSeller).map(displayName).join(" • ") || "—";
    const minPrice = Math.min(...rest.items.map(i => i.price));

    const summary = currentLang === "en"
        ? `Menu of ${catsCount} sections starting at ${minPrice.toLocaleString()} IQD. Top picks: ${bestSellers}.`
        : `قائمة من ${catsCount} أقسام تبدأ أسعارها من ${minPrice.toLocaleString()} د.ع. الأكثر طلباً: ${bestSellers}.`;

    infoEl.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <div class="flex items-center gap-2">
                    <h3 class="font-black text-brand-700 dark:text-brand-400 text-base">${rest.logo} ${distName}</h3>
                    <span class="text-[10px] px-2 py-0.5 rounded-md font-bold ${rest.isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">
                        ${rest.isOpen ? t('open_now') : t('closed')}
                    </span>
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    <i class="fa-solid fa-clock"></i> ${t('prep')}: ${rest.prepTime} • ⭐ ${rest.rating}
                </p>
                <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    <i class="fa-solid fa-stopwatch"></i> ⏱️ ${t('est_time')}: ${rest.prepTime} + ${t('delivery_time')}
                </p>
            </div>
        </div>

        <!-- Quick Summary -->
        <div class="mt-3 bg-blue-50 dark:bg-slate-700/50 border border-blue-100 dark:border-slate-600 rounded-xl p-2.5 text-[11px]">
            <p class="font-black text-brand-700 dark:text-brand-300 mb-0.5">✨ ${t('quick_summary')}</p>
            <p class="font-semibold text-slate-600 dark:text-slate-300">${summary}</p>
        </div>

        <!-- Stars / Audio / Reviews row -->
        <div class="mt-3 flex items-center justify-between gap-2" id="rate-audio-row"></div>
        <div id="reviews-box" class="hidden mt-2 border-t border-slate-100 dark:border-slate-700 pt-2"></div>
    `;
    renderStars();
    renderReviewsToggle();
}

function renderStars() {
    const row = document.getElementById("rate-audio-row");
    if (!row) return;
    const saved = getUserRating(currentRestaurantKey);
    const avg = getAvgRating(currentRestaurantKey);
    const cnt = getRatingCount(currentRestaurantKey);
    row.innerHTML = `
        <div>
            <div class="flex items-center gap-0.5" id="stars-box">
                ${[1,2,3,4,5].map(n => `<i data-star="${n}" class="fa-star cursor-pointer text-sm transition ${n <= saved ? 'fa-solid text-amber-400' : 'fa-regular text-slate-300'}"></i>`).join("")}
            </div>
            <span class="text-[10px] text-slate-400 font-bold">${t('avg_rating')}: ${avg ? avg.toFixed(1) : "—"} ★ (${cnt})</span>
        </div>
        <div class="flex items-center gap-1.5">
            <button onclick="speakMenu()" class="text-[11px] font-bold bg-slate-100 dark:bg-slate-700 px-2 py-1.5 rounded-lg">🔊 ${t('listen_menu')}</button>
            <button id="reviews-toggle-btn" onclick="toggleReviews()" class="text-[11px] font-bold bg-slate-100 dark:bg-slate-700 px-2 py-1.5 rounded-lg">💬 ${t('reviews')} (${getReviewsCount(currentRestaurantKey)})</button>
        </div>
    `;
    row.querySelectorAll("[data-star]").forEach(star => {
        star.addEventListener("click", () => setUserRating(parseInt(star.dataset.star)));
    });
}

function renderCategoryTabs() {
    const el = document.getElementById("category-tabs");
    if (!el) return;
    el.innerHTML = "";
    const rest = restaurantsData[currentRestaurantKey];
    if (!rest) return;
    rest.categories.forEach((cat, idx) => {
        const isActive = cat === currentCategory;
        const label = (currentLang === "en" && rest.categoriesEn && rest.categoriesEn[idx]) ? rest.categoriesEn[idx] : cat;
        const btn = document.createElement("button");
        btn.className = `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
            isActive ? "bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-300" : "bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700"
        }`;
        btn.innerText = label;
        btn.onclick = () => { currentCategory = cat; renderCategoryTabs(); renderMenuItems(); };
        el.appendChild(btn);
    });
}

function renderMenuItems() {
    const el = document.getElementById("menu-items");
    if (!el) return;
    el.innerHTML = "";
    let items = restaurantsData[currentRestaurantKey].items;

    if (currentCategory !== "الكل") items = items.filter(i => i.category === currentCategory);
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        items = items.filter(i => i.name.toLowerCase().includes(q) || (i.nameEn || "").toLowerCase().includes(q));
    }
    if (bestFilterActive) items = items.filter(i => i.isBestSeller);
    if (favFilterActive) items = items.filter(i => favorites.includes(i.id));
    if (menuSortMode === "price-asc") items = items.slice().sort((a, b) => a.price - b.price);
    else if (menuSortMode === "price-desc") items = items.slice().sort((a, b) => b.price - a.price);
    else if (menuSortMode === "name") items = items.slice().sort((a, b) => displayName(a).localeCompare(displayName(b), "ar"));

    items.forEach(item => {
        const fav = favorites.includes(item.id);
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 flex justify-between items-center shadow-sm hover:border-brand-300 transition";
        card.innerHTML = `
            <div>
                <div class="flex items-center gap-1.5">
                    <h4 class="font-bold text-xs">${displayName(item)}</h4>
                    ${item.isBestSeller ? `<span class="text-[9px] bg-amber-100 text-amber-700 font-black px-1.5 py-0.5 rounded">🔥 ${t('bestseller')}</span>` : ''}
                </div>
                <span class="text-brand-700 dark:text-brand-400 font-black text-xs block mt-1">${item.price.toLocaleString()} د.ع</span>
            </div>
            <div class="flex flex-col items-end gap-1.5">
                <button onclick="toggleFav('${item.id}')" class="text-base" title="${t('save_later')}">
                    <i class="${fav ? 'fa-solid' : 'fa-regular'} fa-heart text-rose-500"></i>
                </button>
                <button onclick="openCustomizationModal('${item.id}', '${displayName(item)}', ${item.price})" class="bg-brand-600 hover:bg-brand-700 text-white font-black text-xs px-3 py-1.5 rounded-lg active:scale-95 transition">
                    + ${t('add')}
                </button>
            </div>
        `;
        el.appendChild(card);
    });

    const counter = document.getElementById("items-counter");
    if (counter) counter.innerText = `${items.length} / ${restaurantsData[currentRestaurantKey].items.length}`;

    if (items.length === 0) el.innerHTML = `<div class="text-center py-8 text-slate-400 text-xs font-bold">${t('no_items')}</div>`;
}

function openCustomizationModal(id, name, price) {
    pendingCustomItem = { id, name, price, storeName: restaurantsData[currentRestaurantKey].name };
    document.getElementById("custom-item-title").innerText = `${t('customize')}: ${name}`;
    document.getElementById("customization-modal").classList.remove("hidden");
    trackRecent(name);
}

function closeCustomizationModal() {
    document.getElementById("customization-modal").classList.add("hidden");
}

function confirmCustomizedAddToCart() {
    if (!pendingCustomItem) return;
    const isDouble = document.querySelector('input[name="item-size"]:checked').value === "دبل";
    const note = document.getElementById("item-note-input").value.trim();

    let finalPrice = pendingCustomItem.price + (isDouble ? 1000 : 0);
    let fullName = pendingCustomItem.name + (isDouble ? " (دبل)" : "") + (note ? ` [${note}]` : "");

    addToCart(pendingCustomItem.id + "_" + Date.now(), fullName, finalPrice, pendingCustomItem.storeName);
    closeCustomizationModal();
}

function handleSearch() {
    searchQuery = document.getElementById("search-input").value;
    renderMenuItems();
    renderSearchSuggestions();
}

function filterDietary(type) {
    showToast("تم تطبيق تصفية الوجبات الصحية");
    const items = restaurantsData[currentRestaurantKey].items.filter(i => i.dietary === type);
    const el = document.getElementById("menu-items");
    el.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 flex justify-between items-center";
        card.innerHTML = `<div><h4 class="font-bold text-xs">${item.name}</h4><span class="text-brand-700 font-black text-xs">${item.price.toLocaleString()} د.ع</span></div>`;
        el.appendChild(card);
    });
}

function renderGroceryItems() {
    const catEl = document.getElementById("grocery-category-tabs");
    if(!catEl) return;
    catEl.innerHTML = "";
    groceryData.categories.forEach((cat, idx) => {
        const isActive = cat === currentGroceryCategory;
        const label = (currentLang === "en" && groceryData.categoriesEn && groceryData.categoriesEn[idx]) ? groceryData.categoriesEn[idx] : cat;
        const btn = document.createElement("button");
        btn.className = `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
            isActive ? "bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-300" : "bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700"
        }`;
        btn.innerText = label;
        btn.onclick = () => { currentGroceryCategory = cat; renderGroceryItems(); };
        catEl.appendChild(btn);
    });

    const el = document.getElementById("grocery-items");
    if(!el) return;
    el.innerHTML = "";
    let items = groceryData.items;
    if (currentGroceryCategory !== "الكل") items = items.filter(i => i.category === currentGroceryCategory);
    if (favFilterActive) items = items.filter(i => favorites.includes(i.id));

    items.forEach(item => {
        const fav = favorites.includes(item.id);
        const catLabel = (currentLang === "en" && groceryData.categoriesEn && groceryData.categoriesEn[groceryData.categories.indexOf(item.category)]) ? groceryData.categoriesEn[groceryData.categories.indexOf(item.category)] : item.category;
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col justify-between shadow-sm";
        card.innerHTML = `
            <div>
                <span class="text-[10px] text-brand-600 font-bold block mb-1">${catLabel}</span>
                <h4 class="font-bold text-xs mb-2">${displayName(item)}</h4>
            </div>
            <div class="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span class="text-brand-700 dark:text-brand-400 font-black text-xs">${item.price.toLocaleString()} د.ع</span>
                <div class="flex items-center gap-1.5">
                    <button onclick="toggleFav('${item.id}')" class="text-sm" title="${t('save_later')}">
                        <i class="${fav ? 'fa-solid' : 'fa-regular'} fa-heart text-rose-500"></i>
                    </button>
                    <button onclick="addToCart('${item.id}', '${displayName(item)}', ${item.price}, '${t('duluiya_grocery')}')" class="bg-brand-600 text-white font-black text-[11px] px-2.5 py-1 rounded-lg active:scale-95 transition">
                        + ${t('add')}
                    </button>
                </div>
            </div>
        `;
        el.appendChild(card);
    });

    if (items.length === 0) el.innerHTML = `<div class="col-span-2 text-center py-8 text-slate-400 text-xs font-bold">${t('no_items')}</div>`;
}

function calculateTaxiFare() {
    const type = document.getElementById("taxi-type").value;
    let fare = 3000;
    if (type === 'vip') fare = 5000;
    if (type === 'van') fare = 7000;
    if (type === 'cargo') fare = 8000;
    
    document.getElementById("taxi-fare").innerText = `${fare.toLocaleString()} د.ع`;
}

function addToCart(id, name, price, storeName) {
    popSound.play();
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, storeName, qty: 1 });
    }
    userPoints += 5; // Add loyalty points
    saveUserPoints();
    document.getElementById("user-points").innerText = userPoints;
    trackRecent(name);
    bumpItemFreq(id, name, price, storeName);
    renderRecommendations();
    checkGroceryBudget();
    showToast(`${t('added')} "${name}" (+5 ${t('pts')})`);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-price");

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if(badge) badge.innerText = totalQty;

    if(!container) return;
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-400 text-xs font-bold">السلة فارغة حالياً</div>`;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            const div = document.createElement("div");
            div.className = "py-3 flex justify-between items-center";
            div.innerHTML = `
                <div>
                    <h5 class="font-bold text-xs">${item.name}</h5>
                    <span class="text-[10px] text-slate-500 block">${item.storeName}</span>
                    <span class="text-brand-700 dark:text-brand-400 font-black text-xs">${item.price > 0 ? item.price.toLocaleString() + ' د.ع' : 'طلب خاص'}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-xs">-</button>
                    <span class="text-xs font-bold">${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 bg-brand-600 text-white rounded-full font-bold text-xs">+</button>
                </div>
            `;
            container.appendChild(div);
        });
    }

    total += driverTip;

    if (activeDiscount > 0) total = total - (total * activeDiscount / 100);
    if (totalEl) totalEl.innerText = `${total.toLocaleString()} د.ع`;
    
    // Update budget display
    const budgetEl = document.getElementById("grocery-budget-display");
    if(budgetEl) budgetEl.innerText = `${total.toLocaleString()} د.ع`;
    checkGroceryBudget();

    saveCartToStorage();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function applyPromoCode() {
    const code = document.getElementById("promo-code-input").value.trim().toUpperCase();
    const walletHit = loadCoupons().find(c => c.code.toUpperCase() === code && !c.used);
    if (code === "DHILO10") {
        activeDiscount = 10;
        showToast("تم تطبيق كود الخصم 10%!");
        updateCartUI();
    } else if (walletHit) {
        activeDiscount = walletHit.discount;
        walletHit.used = true;
        storeArray("dhilo_coupons", loadCoupons().map(c => c.code === walletHit.code ? { ...c, used: true } : c));
        renderCouponWallet();
        pushNotification((currentLang === "en" ? "🎟️ Coupon applied: " : "🎟️ تم استخدام الكوبون: ") + walletHit.code + " (-" + walletHit.discount + "%)");
        showToast(`تم تطبيق كوبون ${walletHit.code} بخصم ${walletHit.discount}%!`);
        updateCartUI();
    } else {
        alert("كود الخصم غير صحيح!");
    }
}

function toggleCartModal() {
    document.getElementById("cart-modal").classList.toggle("hidden");
}

function openTrackerModal() {
    document.getElementById("tracker-modal").classList.remove("hidden");
    renderTrackerSteps();
}

function closeTrackerModal() {
    document.getElementById("tracker-modal").classList.add("hidden");
}

function showToast(msg) {
    const container = document.getElementById("toast-container");
    if(!container) return;
    const toast = document.createElement("div");
    toast.className = "bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl toast-animate";
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function openLuckyWheel() {
    Swal.fire({
        title: '🎡 عجلة خصومات الضلوعية',
        text: 'ادر العجلة للحصول على خصم 10% مباشر!',
        confirmButtonText: '👑 ادر العجلة',
        showCancelButton: true,
        cancelButtonText: 'إغلاق',
        confirmButtonColor: '#2563eb'
    }).then((res) => {
        if (res.isConfirmed) {
            activeDiscount = 10;
            addCoupon("DHILO10", 10);
            if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            Swal.fire('🎉 مبروك!', 'حصلت على خصم 10% — حُفظ الكوبون في محفظتك!', 'success');
            updateCartUI();
        }
    });
}

async function sendOrderWhatsApp() {
    if (cart.length === 0) return alert("سلتك فارغة!");
    const name = document.getElementById("cust-name").value;
    const phone = document.getElementById("cust-phone").value;
    const payment = document.getElementById("payment-method").value;
    const isGift = document.getElementById("is-gift").checked;

    if (!name || !phone) return alert("يرجى إدخال الاسم ورقم الهاتف!");

    let msg = `*طلب جديد عبر تطبيق خدمات الضلوعية* 🛒\n`;
    msg += `*الاسم:* ${name}\n*الهاتف:* ${phone}\n*طريقة الدفع:* ${payment}\n`;
    if (isGift) msg += `🎁 *الطلب عبارة عن إهداء (بدون فاتورة)*\n`;
    msg += `------------------------------\n`;

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        msg += `${index + 1}. ${item.name} x${item.qty} = ${item.price > 0 ? itemTotal.toLocaleString() + ' د.ع' : 'طلب خاص'}\n`;
    });

    const schedCb = document.getElementById("schedule-order");
    if (schedCb && schedCb.checked) {
        const dv = document.getElementById("schedule-datetime");
        if (dv && dv.value) msg += `🗓️ موعد التسليم المطلوب: ${dv.value.replace("T", " ")}\n`;
    }

    if (activeDiscount > 0) total = total - (total * activeDiscount / 100);
    if (driverTip > 0) { total += driverTip; msg += `🤝 إكرامية السائق: ${driverTip.toLocaleString()} د.ع\n`; }
    msg += `------------------------------\n*المجموع الإجمالي:* ${total.toLocaleString()} د.ع`;

    // GPS: إرفاق موقع الزبون تلقائياً (حسب خانة "إرفاق موقعي GPS" في السلة)
    const sendLocEl = document.getElementById("send-location");
    const includeGPS = sendLocEl ? sendLocEl.checked : true;

    // توجيه ذكي: البحث عن سائق ديليفري متاح
    const routing = resolveOrderPhoneNumber("cart");
    if (routing.directed) {
        msg += `\n🚴 *السائق المُوجَّه:* ${routing.driverName}`;
        showToast(`📱 يُوجَّه الطلب للسائق ${routing.driverName}`);
    }

    const gpsPos = await sendWhatsAppWithGPS((gpsText) => msg + gpsText, includeGPS, routing.phone);

    // Tracker simulation + history + notifications + admin queue
    startTracking();
    saveLastOrder();
    const summary = cart.map(i => `${i.name} x${i.qty}`).join("، ").slice(0, 140);
    logOrder("cart", summary, total.toLocaleString() + " د.ع");
    const orderId = createAdminOrder("cart", name, phone, summary, total.toLocaleString() + " د.ع", gpsPos);
    pushNotification((currentLang === "en" ? "🧾 Order #" : "🧾 تم تسجيل طلبك برقم ") + orderId + (currentLang === "en" ? " sent — awaiting admin confirmation" : " — بانتظار موافقة الإدارة"));
    // Track order count for the personal dashboard
    const sentCount = parseInt(localStorage.getItem("dhilo_orders") || "0", 10) + 1;
    localStorage.setItem("dhilo_orders", String(sentCount));
}

function saveCartToStorage() {
    try { localStorage.setItem("dhilo_cart", JSON.stringify(cart)); } catch (e) {}
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem("dhilo_cart");
        if (saved) { cart = JSON.parse(saved); updateCartUI(); }
    } catch (e) {}
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast("تم تفريغ السلة بنجاح");
}

function setupCartModalOutsideClick() {
    const modal = document.getElementById("cart-modal");
    if (!modal) return;
    modal.addEventListener("click", (e) => { if (e.target === modal) toggleCartModal(); });
}
/* ================== ربط الأزرار والأقسام المتبقية مع HTML ================== */

// إضافة قائمة مسواك مكتوبة يدوياً إلى السلة
function addCustomGroceryToCart() {
    const textInput = document.getElementById("custom-grocery-text");
    const text = textInput.value.trim();
    if (!text) { alert("يرجى كتابة قائمة المسواك أولاً!"); return; }

    addToCart(
        "custom_grocery_" + Date.now(),
        "قائمة مسواك خاصة: " + text.slice(0, 50) + (text.length > 50 ? "..." : ""),
        0,
        "مسواك الضلوعية"
    );
    textInput.value = "";
    showToast("تمت إضافة قائمتك الخاصة إلى السلة ✅");
}

/* ===== GPS: إرفاق موقع الزبون تلقائياً مع كل الطلبات ===== */

// الحصول على إحداثيات GPS كـ Promise (يدعم صيغ المتصفحات الحديثة والقديمة)
function getGPSPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) { reject(new Error("unsupported")); return; }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                try {
                    const lat = (pos.coords && typeof pos.coords.latitude === "number") ? pos.coords.latitude : pos.latitude;
                    const lon = (pos.coords && typeof pos.coords.longitude === "number") ? pos.coords.longitude : pos.longitude;
                    if (typeof lat !== "number" || typeof lon !== "number" || isNaN(lat) || isNaN(lon)) { reject(new Error("invalid")); return; }
                    resolve({ lat, lon });
                } catch (err) { reject(err); }
            },
            (err) => reject(err),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
        );
    });
}

// تنسيق نص الموقع + رابط خرائط جوجل لإرفاقه بالرسالة
function formatGPSLink(lat, lon) {
    const latStr = lat.toFixed(6);
    const lonStr = lon.toFixed(6);
    return `📍 موقع الزبون (GPS): ${latStr}, ${lonStr}\n🗺️ https://www.google.com/maps?q=${latStr},${lonStr}`;
}

// إرسال رسالة واتساب مع محاولة إرفاق GPS تلقائياً
// (يفتح تبويباً فارغاً بشكل متزامن أولاً حتى لا يحجبه حاجب النوافذ المنبثقة بعد await)
async function sendWhatsAppWithGPS(msgBuilder, includeGPS, targetPhone) {
    const win = window.open("", "_blank");
    let gpsText = "";
    if (includeGPS) {
        showToast(t("gps_locating"));
        try {
            const pos = await getGPSPosition();
            gpsText = "\n" + formatGPSLink(pos.lat, pos.lon);
            showToast("📍 " + t("gps_ok"));
        } catch (e) {
            showToast(t("gps_failed"));
        }
    }
    const msg = msgBuilder(gpsText);
    const phone = targetPhone || TARGET_PHONE_NUMBER;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
    if (win && !win.closed) {
        try { win.location.href = url; return gpsPos; } catch (e) {}
    }
    window.open(url, "_blank");
    return gpsPos;
}


/**
 * يحدد رقم هاتف وجهة الطلب تلقائياً:
 * - إن وُجد سائق متاح من نفس النوع (ديليفري/تكسي) يُوجَّه إليه
 * - وإلا يُوجَّه للرقم الرئيسي
 */
function resolveOrderPhoneNumber(orderType) {
    const mainNumber = TARGET_PHONE_NUMBER;
    let driverType = "delivery";
    if (orderType === "taxi") driverType = "taxi";

    let driver = null;
    try {
        const drivers = JSON.parse(localStorage.getItem("dhilo_drivers") || "[]");
        const pool = drivers.filter(d => d.status !== "busy" && d.type === driverType);
        if (pool.length) driver = pool[Math.floor(Math.random() * pool.length)];
    } catch (e) {}

    if (driver && driver.phone) {
        let phone = String(driver.phone).replace(/[^0-9]/g, "");
        if (phone.startsWith("0")) phone = "964" + phone.substring(1);
        else if (!phone.startsWith("964")) phone = "964" + phone;
        return { phone, driverName: driver.name, directed: true, driverType: driver.type };
    }
    return { phone: mainNumber, driverName: null, directed: false, driverType: null };
}

// تأكيد طلب التكسي (نموذج قسم وصلني) — مع إرفاق GPS تلقائياً
async function handleTaxiOrder(event) {
    event.preventDefault();

    const from = document.getElementById("taxi-from").value.trim();
    const to = document.getElementById("taxi-to").value.trim();
    const phone = document.getElementById("taxi-phone").value.trim();
    const schedule = document.getElementById("taxi-schedule").value;
    const femaleDriver = document.getElementById("female-driver").checked;

    if (!from || !to || !phone) { alert("يرجى تعبئة مكان الانطلاق والوجهة ورقم الهاتف!"); return; }

    const type = document.getElementById("taxi-type").value;
    let fare = 3000;
    if (type === "vip") fare = 5000;
    if (type === "van") fare = 7000;
    if (type === "cargo") fare = 8000;

    const scheduleLabel = { now: "الآن فوراً", "30min": "بعد 30 دقيقة", "1hour": "بعد ساعة" }[schedule] || "الآن فوراً";
    const typeLabel = document.getElementById("taxi-type").selectedOptions[0].text;

    let msg = `*طلب تكسي - خدمات الضلوعية الشامل* 🚕\n`;
    msg += `نوع المركبة: ${typeLabel}\n`;
    if (femaleDriver) msg += `مطلوب سائقة أنثى 👩\n`;
    msg += `مكان الانطلاق: ${from}\n`;
    msg += `الوجهة: ${to}\n`;
    msg += `موعد الرحلة: ${scheduleLabel}\n`;
    msg += `رقم الهاتف: ${phone}\n`;
    msg += `الأجرة التقديرية: ${fare.toLocaleString()} د.ع\n`;

    const gpsPos = await sendWhatsAppWithGPS((gpsText) => msg + gpsText, true);
    createAdminOrder("taxi", "زبون وصلني", phone, `${from} → ${to}`, fare.toLocaleString() + " د.ع", gpsPos);
    logTrip({ from, to, type: typeLabel, fare: fare.toLocaleString() + " د.ع", ts: Date.now() });
    logOrder("taxi", `${from} → ${to}`, fare.toLocaleString() + " د.ع");
    pushNotification(currentLang === "en" ? "🚕 Taxi request sent — the driver will call you" : "🚕 تم إرسال طلب التكسي — السائق سيتصل بك");
    showToast("تم إرسال طلب التكسي عبر الواتساب 🚕");
}

// إرسال طلب الصيدلية عبر الواتساب — مع إرفاق GPS تلقائياً
async function sendPharmacyOrder() {
    const text = document.getElementById("pharmacy-text").value.trim();
    const fileInput = document.getElementById("rx-file");
    const hasFile = fileInput.files && fileInput.files.length > 0;
    const fileName = hasFile ? fileInput.files[0].name : "";

    if (!text && !hasFile) { alert("يرجى كتابة أسماء الأدوية أو رفع صورة الوصفة!"); return; }

    let msg = `*طلب صيدلية - خدمات الضلوعية الشامل* 💊\n`;
    if (text) msg += `الأدوية المطلوبة:\n${text}\n`;
    if (hasFile) msg += `\n(تم إرفاق صورة الوصفة الطبية: ${fileName})`;
    msg += `\nيرجى التواصل لتأكيد الطلب.`;

    const gpsPos = await sendWhatsAppWithGPS((gpsText) => msg + gpsText, true);
    createAdminOrder("pharmacy", "زبون صيدلية", "", (text || ("صورة وصفة: " + fileName)).slice(0, 140), "—", gpsPos);
    logOrder("pharmacy", (text || ("صورة وصفة: " + fileName)).slice(0, 140), "—");
    pushNotification(currentLang === "en" ? "💊 Pharmacy order sent successfully" : "💊 تم إرسال طلب الصيدلية بنجاح");
    showToast("تم إرسال الطلب للصيدلية 💊");
}

// طلب خدمة صيانة منزلية (قسم الصيانة) — مع إرفاق GPS تلقائياً
async function requestHomeService(serviceType) {
    let msg = `*طلب صيانة منزلية - خدمات الضلوعية الشامل* 🔧\n`;
    msg += `الخدمة المطلوبة: ${serviceType}\n`;
    const timeSel = document.getElementById("maintenance-time");
    if (timeSel && timeSel.value) msg += `وقت الزيارة المفضل: ${timeSel.value}\n`;
    const notesEl = document.getElementById("maintenance-notes");
    if (notesEl && notesEl.value.trim()) msg += `وصف العطل: ${notesEl.value.trim()}\n`;
    msg += `يرجى التواصل لتحديد موعد الزيارة ومعاينة العطل.`;

    const gpsPos = await sendWhatsAppWithGPS((gpsText) => msg + gpsText, true);
    createAdminOrder("maintenance", "زبون صيانة", "", serviceType, "—", gpsPos);
    logOrder("maintenance", serviceType, "—");
    pushNotification((currentLang === "en" ? "🔧 Maintenance request sent: " : "🔧 تم إرسال طلب الصيانة: ") + serviceType);
    showToast(`تم إرسال طلب "${serviceType}" 🔧`);
}

/* =====================================================================
   الميزات المضافة (25 ميزة) — نظام اللغة والترجمة
   ===================================================================== */
const UI = {
    ar: {
        open_now: "مفتوح الآن 🟢", closed: "مغلق 🔴", prep: "تحضير",
        quick_summary: "لمحة سريعة عن هذا المطعم", avg_rating: "متوسط التقييم",
        est_time: "التقدير الزمني", delivery_time: "10-20 دقيقة توصيل",
        listen_menu: "استمع للقائمة", reviews: "الآراء", bestseller: "الأكثر طلباً",
        save_later: "أضف للمفضلة", add: "إضافة", no_items: "لا توجد نتائج مطابقة",
        added: "تمت إضافة", pts: "نقاط", customize: "تخصيص",
        duluiya_grocery: "مسواك الضلوعية", no_results: "لا توجد نتائج",
        offer_title: "🔥 عرض خاص لك قبل أن ينتهي الوقت!",
        offer_html: "استخدم كود <b>DHILO10</b> عند إرسال طلبك عبر الواتساب واحصل على <b>خصم 10%</b> فورياً 🎁",
        offer_cta: "خذ الكود 🎁", code_applied: "تم تطبيق كود الخصم DHILO10!",
        cancel: "إلغاء", phone: "رقم الهاتف",
        announce_text: "🚀 توصيل مجاني للطلبات فوق 15,000 د.ع — استخدم كود FREE15 🛵",
        cookie_text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وحفظ تفضيلاتك.",
        accept: "قبول",
        removed_fav: "أُزيل من المفضلة", added_fav: "أُضيف للمفضلة ❤️",
        fav_filter_on: "عرض المفضلة فقط", fav_filter_off: "إيقاف تصفية المفضلة",
        share: "مشاركة", just_now: "قبل لحظات", listening: "🔊 يتم قراءة القائمة الآن",
        tts_unsupported: "المتصفح لا يدعم القراءة الصوتية",
        rated: "شكراً! قيّمت بـ", your_name: "اسمك", review_ph: "اكتب رأيك هنا...",
        send: "إرسال", anonymous: "زائر", no_reviews: "لا توجد آراء بعد — كن أول من يقيّم!",
        review_required: "اكتب نص الرأي أولاً", review_added: "تم نشر رأيك ✅",
        poll_q: "ما هو أفضل مطعم في الضلوعية؟", poll_opt1: "علي مندب", poll_opt2: "بلو دوم",
        poll_opt3: "كلاهما ممتاز", vote: "صوّت الآن 📊", poll_total: "إجمالي الأصوات",
        poll_required: "اختر خياراً أولاً", poll_thanks: "شكراً لتصويتك! (+5 نقاط)",
        calc_title: "حاسبة الصواني الجماعية", calc_persons: "عدد الأشخاص",
        calc_tray: "نوع الصينية", iqd: "د.ع", calc_for: "لـ", persons: "أشخاص",
        trays: "صواني", total: "الإجمالي", per_person: "للشخص",
        focus_on: "تم تفعيل وضع التركيز 🧘", focus_off: "خروج من وضع التركيز",
        exit_focus: "الخروج من وضع التركيز",
        nav_restaurants: "مطاعم", nav_grocery: "مسواك", nav_taxi: "وصلني",
        nav_pharmacy: "صيدلية", nav_maintenance: "صيانة",
        index_title: "فهرس سريع", restaurant_menus: "قوائم المطاعم",
        faq_title: "الأسئلة الشائعة",
        faq1_q: "كم تستغرق مدة التوصيل؟", faq1_a: "عادة 20-40 دقيقة حسب الموقع وحالة الزحام، وتظهر مدة التحضير لكل مطعم.",
        faq2_q: "ما طرق الدفع المتوفرة؟", faq2_a: "الدفع نقداً عند الاستلام، زين كاش، أو ماستر كارد/كي كارد.",
        faq3_q: "كيف أستخدم كود الخصم؟", faq3_a: "انسخ الكود (مثل DHILO10) وأدخله في حقل «كود الخصم» داخل السلة قبل تأكيد الطلب.",
        faq4_q: "هل يمكن إهداء الطلب لشخص آخر؟", faq4_a: "نعم، فعّل خيار «🎁 هذا الطلب إهداء» وسيتم إخفاء الفاتورة عن المستلم.",
        faq5_q: "ماذا لو وصل الطلب خطأً؟", faq5_a: "تواصل معنا مباشرة عبر زر الدعم وسنعيد إرسال الطلب أو نعوّضك فوراً.",
        map_title: "مواقعنا على الخريطة", map_open_google: "فتح في خرائط جوجل",
        map_locate: "حدد موقعي الحالي", gps_unsupported: "المتصفح لا يدعم تحديد الموقع",
        gps_ok: "تم تحديد موقعك بنجاح", gps_denied: "تم رفض الوصول للموقع — فعّل الإذن",
        gps_locating: "📍 جاري تحديد موقعك الحالي...", gps_failed: "تعذر تحديد الموقع — سيُرسل الطلب بدونه",
        dashboard_title: "لوحتي الشخصية", your_points: "نقاطك", dash_orders: "طلبات أُرسلت",
        dash_favs: "مفضلة", dash_refs: "أصدقاء أُحيلوا", dash_news: "نشرة بريدية",
        recent_viewed: "🕘 آخر ما تصفحته:", no_recent: "لا سجل بعد", referral_code: "كود الإحالة الخاص بك:",
        code_copied: "تم نسخ الكود", yes: "مشترك ✅", no: "غير مشترك",
        news_title: "نشرة بريدية حسب اهتمامك",
        news_t1: "عروض المطاعم", news_t2: "المسواك", news_t3: "الصيانة", news_t4: "كل جديد",
        news_btn: "اشترك مجاناً 🚀", news_done: "تم الاشتراك بنجاح!",
        news_name_required: "أدخل اسمك للاشتراك",
        ref_title: "ادعُ صديقاً واربح 🎁", ref_desc: "شارك كودك مع أصدقائك واحصل على 20 نقطة عن كل صديق!",
        ref_share: "مشاركة الكود", ref_default_name: "صديقي",
        ref_msg: "مرحباً {name}! اطلب من {code} عبر تطبيق خدمات الضلوعية الشامل واحصل على خصم أول طلب 🙏",
        ref_reward: "تم تسجيل إحالتك! (+20 نقطة 🎉)",
        best_label: "الأكثر طلباً", surprise_title: "وجبتك المقترحة 🎲",
        express_done: "تم تجهيز طلبك المعتاد ⚡", express_empty: "لا يوجد سجل طلبات بعد — اطلب أولاً!",
        rec_title: "مقترح لك:", dest_pick: "تم اختيار الوجهة: ", dest_saved: "تم حفظ الوجهة 📍",
        dest_required: "اكتب الوجهة أولاً ثم احفظها!", trip_empty: "لا رحلات بعد",
        tip_none: "بدون", reorder_none: "لا يوجد طلب سابق!", reorder_done: "تمت إعادة آخر طلب إلى السلة 🔁",
        notif_title: "الإشعارات", notif_read_all: "تعليم الكل كمقروء", notif_empty: "لا إشعارات بعد",
        wallet_title: "كوبوناتك المتوفرة", history_title: "سجل الطلبات", history_empty: "لا طلبات بعد — ابدأ الآن!",
        eta: "الوصول خلال", minutes: "دقيقة", delivered: "تم التسليم 🎉",
        type_cart: "🛒 طلب أكل", type_taxi: "🚕 تكسي", type_pharmacy: "💊 صيدلية", type_maintenance: "🔧 صيانة",
        template_added: "تمت إضافة القالب الجاهز ✅", tier_max: "أعلى مستوى!"
    },
    // ----FEATURE-PART-1----
    en: {
        open_now: "Open Now 🟢", closed: "Closed 🔴", prep: "Prep",
        quick_summary: "Quick summary of this restaurant", avg_rating: "Avg rating",
        est_time: "Estimated time", delivery_time: "10-20 min delivery",
        listen_menu: "Listen to menu", reviews: "Reviews", bestseller: "Bestseller",
        save_later: "Save to favorites", add: "Add", no_items: "No matching results",
        added: "Added", pts: "pts", customize: "Customize",
        duluiya_grocery: "Dhuluiya Grocery", no_results: "No results found",
        offer_title: "🔥 Special offer before time runs out!",
        offer_html: "Use code <b>DHILO10</b> when sending your order on WhatsApp to instantly get <b>10% OFF</b> 🎁",
        offer_cta: "Get the code 🎁", code_applied: "Discount code DHILO10 applied!",
        cancel: "Cancel", phone: "Phone",
        announce_text: "🚀 Free delivery for orders above 15,000 IQD — use code FREE15 🛵",
        cookie_text: "We use cookies to improve your experience and remember your preferences.",
        accept: "Accept",
        removed_fav: "Removed from favorites", added_fav: "Added to favorites ❤️",
        fav_filter_on: "Showing favorites only", fav_filter_off: "Favorites filter off",
        share: "Share", just_now: "just now", listening: "🔊 Now reading the menu aloud",
        tts_unsupported: "Your browser does not support text-to-speech",
        rated: "Thanks! You rated", your_name: "Your name", review_ph: "Write your review here...",
        send: "Send", anonymous: "Guest", no_reviews: "No reviews yet — be the first!",
        review_required: "Write your review first", review_added: "Your review published ✅",
        poll_q: "What is the best restaurant in Dhuluiya?", poll_opt1: "Ali Mandab",
        poll_opt2: "Blue Dome", poll_opt3: "Both are great", vote: "Vote now 📊",
        poll_total: "Total votes", poll_required: "Choose an option first",
        poll_thanks: "Thanks for voting! (+5 pts)",
        calc_title: "Group trays calculator", calc_persons: "Number of people",
        calc_tray: "Tray type", iqd: "IQD", calc_for: "For", persons: "people",
        trays: "trays", total: "Total", per_person: "per person",
        focus_on: "Focus mode enabled 🧘", focus_off: "Exited focus mode",
        exit_focus: "Exit focus mode",
        nav_restaurants: "Restaurants", nav_grocery: "Grocery", nav_taxi: "Taxi",
        nav_pharmacy: "Pharmacy", nav_maintenance: "Maintenance",
        index_title: "Quick index", restaurant_menus: "Restaurant menus",
        faq_title: "Frequently Asked Questions",
        faq1_q: "How long does delivery take?", faq1_a: "Usually 20-40 minutes depending on location & traffic; prep time is shown per restaurant.",
        faq2_q: "What payment methods are available?", faq2_a: "Cash on delivery, ZainCash, or MasterCard/Ki Card.",
        faq3_q: "How do I use a discount code?", faq3_a: "Copy the code (e.g. DHILO10) and enter it in the \"Promo code\" field inside the cart before confirming.",
        faq4_q: "Can I send the order as a gift?", faq4_a: "Yes, enable \"🎁 This order is a gift\" and the invoice will be hidden from the receiver.",
        faq5_q: "What if the order arrives wrong?", faq5_a: "Contact us directly via the support button and we will resend or compensate you immediately.",
        map_title: "Our locations on the map", map_open_google: "Open in Google Maps",
        map_locate: "Locate me", gps_unsupported: "Geolocation is not supported",
        gps_ok: "Location captured successfully", gps_denied: "Location access denied — enable permission",
        gps_locating: "📍 Locating your current position...", gps_failed: "Couldn't get location — the order will be sent without it",
        dashboard_title: "My dashboard", your_points: "Your points", dash_orders: "Orders sent",
        dash_favs: "Favorites", dash_refs: "Friends referred", dash_news: "Newsletter",
        recent_viewed: "🕘 Recently viewed:", no_recent: "No history yet", referral_code: "Your referral code:",
        code_copied: "Code copied", yes: "Subscribed ✅", no: "Not subscribed",
        news_title: "Newsletter by your interests",
        news_t1: "Restaurant offers", news_t2: "Grocery", news_t3: "Maintenance", news_t4: "All new",
        news_btn: "Subscribe for free 🚀", news_done: "Subscribed successfully!",
        news_name_required: "Enter your name to subscribe",
        ref_title: "Invite a friend and earn 🎁",
        ref_desc: "Share your code with friends and earn 20 points for each friend!",
        ref_share: "Share code", ref_default_name: "my friend",
        ref_msg: "Hello {name}! Order using {code} on the Dhuluiya Services app and get a first-order discount 🙏",
        ref_reward: "Referral recorded! (+20 pts 🎉)",
        best_label: "Bestsellers", surprise_title: "Your suggested meal 🎲",
        express_done: "Your usual order is ready ⚡", express_empty: "No order history yet — order first!",
        rec_title: "For you:", dest_pick: "Destination selected: ", dest_saved: "Destination saved 📍",
        dest_required: "Type the destination first!", trip_empty: "No trips yet",
        tip_none: "None", reorder_none: "No previous order!", reorder_done: "Last order added to cart 🔁",
        notif_title: "Notifications", notif_read_all: "Mark all read", notif_empty: "No notifications yet",
        wallet_title: "Your available coupons", history_title: "Order history", history_empty: "No orders yet — start now!",
        eta: "ETA", minutes: "min", delivered: "Delivered 🎉",
        type_cart: "🛒 Food order", type_taxi: "🚕 Taxi", type_pharmacy: "💊 Pharmacy", type_maintenance: "🔧 Maintenance",
        template_added: "Template added ✅", tier_max: "Max tier!"
    }
};

function t(key) {
    return (UI[currentLang] && UI[currentLang][key]) ? UI[currentLang][key] : (UI.ar[key] || key);
}

function displayName(item) {
    return (currentLang === "en" && item.nameEn) ? item.nameEn : item.name;
}
// ----FEATURE-PART-2----
// ---------- ترجمة العناصر الثابتة في HTML ----------
const STATIC_I18N = [
    { s: "#search-input", ph: ["ابحث عن وجبة أو مطعم...", "Search for a meal or restaurant..."] },
    { s: "#healthy-label", v: ["صحي", "Healthy"] },
    { s: "#nav-btn-restaurants span", v: ["مطاعم", "Restaurants"] },
    { s: "#nav-btn-grocery span", v: ["مسواك", "Grocery"] },
    { s: "#nav-btn-taxi span", v: ["وصلني", "Taxi"] },
    { s: "#nav-btn-pharmacy span", v: ["صيدلية", "Pharmacy"] },
    { s: "#nav-btn-maintenance span", v: ["صيانة", "Maintenance"] },
    { s: "#section-taxi h3", v: ["حجز تكسي وخدمة توصيل", "Book a Taxi & Delivery"] },
    { s: "#section-taxi label", list: ["نوع الخدمة والمركبة", "Service & Vehicle Type"], lastText: true, index: 0 },
    { s: "#section-taxi label", list: ["طلب سائقة أنثى (للعوائل والنساء) 👩", "Request a female driver (for families) 👩"], lastText: true, index: 1 },
    { s: "#section-taxi label", list: ["مكان الانطلاق", "From (location)"], index: 2 },
    { s: "#section-taxi label", list: ["الوجهة", "Destination"], index: 3 },
    { s: "#section-taxi label", list: ["موعد الرحلة", "Trip time"], index: 4 },
    { s: "#section-taxi label", list: ["رقم الهاتف", "Phone number"], index: 5 },
    { s: '#taxi-type option[value="normal"]', v: ["سيارة صالون عادية (3,000 د.ع)", "Regular sedan (3,000 IQD)"] },
    { s: '#taxi-type option[value="vip"]', v: ["سيارة VIP حديثة (5,000 د.ع)", "Modern VIP car (5,000 IQD)"] },
    { s: '#taxi-type option[value="van"]', v: ["فان عائلي 7 راكب (7,000 د.ع)", "Family van (7,000 IQD)"] },
    { s: '#taxi-type option[value="cargo"]', v: ["سيارة حمل لنقل البضائع (8,000 د.ع)", "Cargo vehicle (8,000 IQD)"] },
    { s: '#taxi-schedule option[value="now"]', v: ["الآن فوراً", "Now"] },
    { s: '#taxi-schedule option[value="30min"]', v: ["بعد 30 دقيقة", "In 30 minutes"] },
    { s: '#taxi-schedule option[value="1hour"]', v: ["بعد ساعة", "In 1 hour"] },
    { s: '#section-taxi button[type="submit"]', v: ["تأكيد طلب التكسي 🚕", "Confirm Taxi Order 🚕"] },
    { s: "#section-pharmacy h3", v: ["طلب أدوية ومستلزمات طبية", "Pharmacy & Medical Supplies"] },
    { s: "#section-pharmacy span", v: ["🚨 دعم الحالات الطارئة", "🚨 Emergency support"], index: 0 },
    { s: "#section-pharmacy label", v: ["رفع صورة الوصفة (الروشتة):", "Upload prescription photo:"] },
    { s: "#pharmacy-text", ph: ["أو اكتب اسماء الأدوية المطلوبة بالتفصيل هنا...", "Or type the required medicines in detail here..."] },
    { s: '#section-pharmacy button[onclick^="sendPharmacyOrder"]', v: ["إرسال الطلب للصيدلية 💊", "Send order to pharmacy 💊"] },
    { s: "#section-maintenance span", v: ["جميع الخدمات مصحوبة بضمان 7 أيام", "All services covered by 7-day warranty"], index: 0 },
    { s: '#section-maintenance span[onclick^="Swal"]', v: ["الشروط", "Terms"] },
    { s: "#section-maintenance h4", list: ["كهربائي منازل", "Home Electrician"], index: 0 },
    { s: "#section-maintenance h4", list: ["سباكة وصحيات", "Plumbing"], index: 1 },
    { s: "#section-maintenance h4", list: ["تبريد وسباليت", "AC & Cooling"], index: 2 },
    { s: "#section-maintenance h4", list: ["ستلايت وتلفزيون", "Satellite & TV"], index: 3 },
    // ----FEATURE-PART-3---- (بقية عناصر السلة والمودالات)
    { s: "#cart-modal h3", v: ["سلة الطلبات", "Orders Cart"] },
    { s: '#cart-modal button[onclick="clearCart()"]', v: ["تفريغ السلة", "Clear cart"] },
    { s: "#promo-code-input", ph: ["كود الخصم (مثل DHILO10)", "Promo code (e.g. DHILO10)"] },
    { s: '#cart-modal button[onclick="applyPromoCode()"]', v: ["تطبيق", "Apply"] },
    { s: "#cart-modal label", list: ["طريقة الدفع", "Payment method"], index: 0 },
    { s: "#cart-modal label", list: ["إرفاق موقعي GPS تلقائياً", "Attach my GPS location automatically"], lastText: true, index: 1 },
    { s: "#cart-modal label", list: ["🎁 هذا الطلب إهداء لشخص آخر (إخفاء الفاتورة)", "🎁 This is a gift (hide invoice)"], lastText: true, index: 2 },
    { s: '#payment-method option[value="cod"]', v: ["دفع نقداً عند الاستلام 💵", "Cash on delivery 💵"] },
    { s: '#payment-method option[value="zincash"]', v: ["زين كاش (ZainCash) 📱", "ZainCash 📱"] },
    { s: '#payment-method option[value="mastercard"]', v: ["ماستر كارد / كي كارد 💳", "MasterCard / Ki Card 💳"] },
    { s: "#cust-name", ph: ["الاسم الكامل", "Full name"] },
    { s: "#cust-phone", ph: ["رقم الهاتف", "Phone number"] },
    { s: "#cust-notes", ph: ["ملاحظات العنوان الدقيق", "Exact address notes"] },
    { s: "#custom-item-title", v: ["تخصيص الوجبة", "Customize your meal"] },
    { s: "#customization-modal label", list: ["حجم عادي", "Normal size"], lastText: true, index: 0 },
    { s: "#customization-modal label", list: ["دبل / حجم كبير (+1,000 د.ع)", "Double / large (+1,000 IQD)"], lastText: true, index: 1 },
    { s: "#customization-modal label", list: ["ملاحظات خاصة (بدون بصل، حار...):", "Special notes (no onions, spicy...):"], index: 2 },
    { s: "#item-note-input", ph: ["مثال: صوص إضافي، بدون طماطم", "e.g. extra sauce, no tomatoes"] },
    { s: '#customization-modal button[onclick="confirmCustomizedAddToCart()"]', v: ["إضافة للسلة", "Add to cart"] },
    { s: '#customization-modal button[onclick="closeCustomizationModal()"]', v: ["إلغاء", "Cancel"] },
    { s: "#tracker-modal h3", v: ["تتبع حالة الطلب الحالية 🛵", "Track your order status 🛵"] },
    { s: "#tracker-modal span", list: ["تم استلام الطلب من المطعم/المحل", "Order received from restaurant"], index: 0 },
    { s: "#tracker-modal span", list: ["جاري تحضير وتجهيز الطلب", "Preparing your order"], index: 1 },
    { s: "#tracker-modal span", list: ["السائق في الطريق إليك", "Driver is on the way"], index: 2 },
    { s: "#tracker-modal span", list: ["تم التسليم بنجاح", "Delivered successfully"], index: 3 },
    { s: '#tracker-modal button[onclick="closeTrackerModal()"]', v: ["إغلاق", "Close"] },
    { s: "#section-grocery span", v: ["ميزانية المسواك المتوقعة:", "Expected grocery budget:"], index: 0 },
    { s: "#section-grocery h3", v: ["اكتب قائمة المسواك أو ارفق صورتها:", "Write your grocery list or attach a photo:"] },
    { s: "#custom-grocery-text", ph: ["مثال: 2 كيلو طماطم، قوطية معجون...", "e.g. 2kg tomatoes, a can of paste..."] },
    { s: "#section-grocery label", v: ["ارفق صورة القائمة", "Attach list photo"], lastText: true },
    { s: '#section-grocery button[onclick="addCustomGroceryToCart()"]', v: ["+ إضافة للسلة", "+ Add to cart"] },
    { s: "#faq-link", v: ["الأسئلة الشائعة", "FAQ"] },
    { s: "#map-link", v: ["فروعنا على الخريطة", "Our locations on the map"] },
    { s: "#sort-default", v: ["ترتيب: افتراضي", "Sort: Default"] },
    { s: "#sort-asc", v: ["السعر: الأقل أولاً", "Price: Low → High"] },
    { s: "#sort-desc", v: ["السعر: الأعلى أولاً", "Price: High → Low"] },
    { s: "#sort-name", v: ["الاسم: أ-ي", "Name: A-Z"] },
    { s: "#best-label", v: ["الأكثر طلباً", "Bestsellers"] },
    { s: "#surprise-label", v: ["فاجئني", "Surprise me"] },
    { s: "#express-label", v: ["الطلب المعتاد — أعيد أصنافي المفضلة بضغطة", "Usual order — re-add my favorites in one tap"] },
    { s: "#templates-label", v: ["قوالب جاهزة:", "Quick templates:"] },
    { s: "#maint-time-label", v: ["وقت الزيارة المفضل:", "Preferred visit time:"] },
    { s: "#maintenance-notes", ph: ["وصف العطل باختصار (اختياري)", "Briefly describe the issue (optional)"] },
    { s: "#maintenance-time option", list: ["أي وقت مناسب", "Any suitable time"], index: 0 },
    { s: "#maintenance-time option", list: ["صباحاً (9 ص - 12 م)", "Morning (9 AM - 12 PM)"], index: 1 },
    { s: "#maintenance-time option", list: ["ظهراً (12 م - 4 م)", "Noon (12 PM - 4 PM)"], index: 2 },
    { s: "#maintenance-time option", list: ["مساءً (4 م - 9 م)", "Evening (4 PM - 9 PM)"], index: 3 },
    { s: "#tip-label", v: ["إكرامية السائق:", "Driver tip:"] },
    { s: "#reorder-btn", v: ["🔁 إعادة آخر طلب", "🔁 Reorder last"] },
    { s: "#working-hours", v: ["🕐 نعمل يومياً من 9 صباحاً حتى 12 منتصف الليل", "🕐 Open daily 9 AM – 12 Midnight"] },
    { s: "#trip-title", v: ["سجل الرحلات", "Trip history"] },
    { s: "#cart-modal label", list: ["🗓️ جدولة الطلب لموعد لاحق", "🗓️ Schedule order for later"], lastText: true, index: 3 }
];

function translateStaticUI() {
    const idx = currentLang === "en" ? 1 : 0;
    STATIC_I18N.forEach(item => {
        const nodes = Array.from(document.querySelectorAll(item.s));
        if (!nodes.length) return;
        const node = nodes.length === 1 ? nodes[0] : (nodes[item.index || 0] || nodes[0]);
        const val = item.list ? item.list[idx] : (item.v ? item.v[idx] : (item.ph ? item.ph[idx] : ""));
        if (!val) return;
        if (item.ph) node.placeholder = val;
        else if (item.lastText) {
            const tc = node.lastChild;
            if (tc && tc.nodeType === 3) tc.textContent = val; else node.innerText = val;
        } else node.innerText = val;
    });
}

function applyStoredLanguage() { applyLanguage(currentLang); }

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("dhilo_lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "ar";
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    const lb = document.getElementById("lang-btn");
    if (lb) lb.innerText = lang === "en" ? "عربي" : "EN";
    translateStaticUI();
    renderAllDynamic();
    const ex = document.getElementById("focus-exit-label");
    if (ex) ex.innerText = t("exit_focus");
}

function toggleLanguage() { applyLanguage(currentLang === "en" ? "ar" : "en"); }

function renderAllDynamic() {
    renderRestaurantTabs();
    if (restaurantsData[currentRestaurantKey]) selectRestaurant(currentRestaurantKey);
    renderGroceryItems();
    renderQuickPoll();
    renderGroupCalculator();
    renderNewsletter();
    renderReferral();
    renderFAQ();
    renderAnnouncementBar();
    updateFavBadge();
    renderTierUI();
    renderRecommendations();
    renderSavedDestinations();
    renderTripHistory();
    renderTipButtons();
    renderCouponWallet();
    updateNotifBadge();
}
// ----FEATURE-PART-4----
// ---------- 2) المفضلة (Wishlist) ----------
function loadFavorites() { favorites = loadStoredArray("dhilo_favs"); updateFavBadge(); }
function saveFavorites() { storeArray("dhilo_favs", favorites); }
function updateFavBadge() {
    const el = document.getElementById("fav-count");
    if (el) el.innerText = favorites.length;
    const btn = document.getElementById("fav-filter-btn");
    if (btn) btn.classList.toggle("ring-2", favFilterActive);
}
function toggleFav(id) {
    popSound.play();
    if (favorites.includes(id)) { favorites = favorites.filter(f => f !== id); showToast(t("removed_fav")); }
    else { favorites.push(id); showToast(t("added_fav")); }
    saveFavorites();
    updateFavBadge();
    renderMenuItems();
    renderGroceryItems();
}
function toggleFavFilter() {
    favFilterActive = !favFilterActive;
    updateFavBadge();
    renderMenuItems();
    renderGroceryItems();
    showToast(favFilterActive ? t("fav_filter_on") : t("fav_filter_off"));
}

// ---------- 3) النقاط وسجل المشاهدة ----------
function loadUserPoints() {
    const saved = localStorage.getItem("dhilo_points");
    if (saved !== null) userPoints = parseInt(saved, 10);
}
function saveUserPoints() {
    localStorage.setItem("dhilo_points", String(userPoints));
    // Loyalty tier level-up detection
    const tier = getTier(userPoints);
    const tierName = currentLang === "en" ? tier.nameEn : tier.name;
    const savedTier = localStorage.getItem("dhilo_tier");
    if (savedTier !== tierName) {
        localStorage.setItem("dhilo_tier", tierName);
        if (savedTier !== null && tier.min > 0) {
            pushNotification((currentLang === "en" ? "🎉 Level up! You are now a " : "🎉 ترقية! أصبحت عضو ") + tier.icon + " " + tierName);
            if (typeof confetti === "function") confetti({ particleCount: 120, spread: 80 });
            showToast("🎉 " + tierName);
        }
    }
    renderTierUI();
}
function trackRecent(name) {
    const rec = loadStoredArray("dhilo_recent");
    rec.unshift(name);
    storeArray("dhilo_recent", rec.slice(0, 6));
}

// ---------- 4) البحث الذكي الفوري (Live Search Suggestions) ----------
function renderSearchSuggestions() {
    const box = document.getElementById("search-suggestions");
    if (!box) return;
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 1) { box.classList.add("hidden"); return; }
    const results = [];
    Object.keys(restaurantsData).forEach(key => {
        const rest = restaurantsData[key];
        rest.items.forEach(item => {
            if (item.name.toLowerCase().includes(q) || (item.nameEn || "").toLowerCase().includes(q)) {
                results.push({ icon: rest.logo, name: displayName(item), price: item.price, store: currentLang === "en" && rest.nameEn ? rest.nameEn : rest.name, ref: "rest", key, itemId: item.id });
            }
        });
    });
    groceryData.items.forEach(item => {
        if (item.name.toLowerCase().includes(q) || (item.nameEn || "").toLowerCase().includes(q)) {
            results.push({ icon: "🛒", name: displayName(item), price: item.price, store: t("duluiya_grocery"), ref: "grocery", itemId: item.id });
        }
    });
    if (results.length === 0) {
        box.innerHTML = `<div class="px-3 py-2 text-slate-400 font-bold">${t("no_results")}</div>`;
        box.classList.remove("hidden");
        return;
    }
    box.innerHTML = results.slice(0, 8).map(r => `
        <div onclick="pickSuggestion('${r.ref}', '${r.key || ""}', '${r.itemId}')" class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 border-b border-slate-100 dark:border-slate-700">
            <span class="text-base">${r.icon}</span>
            <div class="flex-1 min-w-0">
                <p class="font-bold truncate">${r.name}</p>
                <p class="text-[10px] text-slate-400">${r.store}</p>
            </div>
            <span class="text-brand-600 font-black">${r.price.toLocaleString()}</span>
        </div>`).join("");
    box.classList.remove("hidden");
}
function pickSuggestion(ref, restKey, itemId) {
    const box = document.getElementById("search-suggestions");
    if (box) box.classList.add("hidden");
    if (ref === "rest") {
        switchMainTab("restaurants");
        selectRestaurant(restKey);
        const item = restaurantsData[restKey].items.find(i => i.id === itemId);
        if (item) { currentCategory = item.category; renderCategoryTabs(); renderMenuItems(); }
        const menu = document.getElementById("menu-items");
        if (menu) menu.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        switchMainTab("grocery");
        const item = groceryData.items.find(i => i.id === itemId);
        if (item) { currentGroceryCategory = item.category; renderGroceryItems(); }
        const g = document.getElementById("grocery-items");
        if (g) g.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
// ----FEATURE-PART-5A----
// ---------- 5) مؤشر قراءة الصفحة + زر العودة للأعلى ----------
function initReadingProgress() {
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    updateReadingProgress();
}
function updateReadingProgress() {
    const el = document.getElementById("reading-progress");
    if (!el) return;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    el.style.width = p + "%";
}
function initBackToTop() {
    window.addEventListener("scroll", toggleBackToTopVisibility, { passive: true });
    toggleBackToTopVisibility();
}
function toggleBackToTopVisibility() {
    const b = document.getElementById("back-to-top");
    if (!b) return;
    b.classList.toggle("hidden", window.scrollY < 400);
}
function scrollToTopSmooth() { window.scrollTo({ top: 0, behavior: "smooth" }); }

// ---------- 6) العداد التنازلي (حتى منتصف الليل) ----------
function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
function updateCountdown() {
    const el = document.getElementById("countdown-time");
    if (!el) return;
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let s = Math.max(0, Math.floor((midnight - now) / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    el.innerText = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function showOfferModal() {
    Swal.fire({
        title: t("offer_title"),
        html: t("offer_html"),
        icon: "warning",
        confirmButtonText: t("offer_cta"),
        showCancelButton: true,
        cancelButtonText: t("cancel"),
        confirmButtonColor: "#2563eb"
    }).then(r => {
        if (r.isConfirmed) {
            addCoupon("DHILO10", 10);
            setTimeout(() => {
                const pc = document.getElementById("promo-code-input");
                if (pc) { pc.value = "DHILO10"; showToast(t("code_applied")); }
            }, 200);
        }
    });
}

// ---------- 7) شريط الإعلانات العلوي ----------
function renderAnnouncementBar() {
    const el = document.getElementById("announcement-bar");
    if (!el) return;
    const showBar = !(localStorage.getItem("dhilo_announce_closed") === "1" || document.body.classList.contains("focus-mode"));
    if (showBar) {
        el.classList.remove("hidden");
        document.body.classList.add("has-announcement");
        el.innerHTML = `<span><i class="fa-solid fa-bullhorn ml-1"></i>${t("announce_text")}</span>
            <span class="absolute left-2 cursor-pointer hover:opacity-70 px-1" onclick="closeAnnouncement()">&times;</span>`;
    } else {
        el.classList.add("hidden");
        document.body.classList.remove("has-announcement");
    }
}
function closeAnnouncement() {
    localStorage.setItem("dhilo_announce_closed", "1");
    document.getElementById("announcement-bar").classList.add("hidden");
    document.body.classList.remove("has-announcement");
}

// ---------- 8) شريط موافقة الكوكيز ----------
function initCookieBanner() {
    if (localStorage.getItem("dhilo_cookie_ok")) return;
    const el = document.getElementById("cookie-banner");
    if (!el) return;
    el.classList.remove("hidden");
    el.innerHTML = `<span class="flex-1 min-w-[200px]">🍪 ${t("cookie_text")}</span>
        <button onclick="acceptCookies()" class="bg-brand-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg">${t("accept")}</button>`;
}
function acceptCookies() {
    localStorage.setItem("dhilo_cookie_ok", "1");
    document.getElementById("cookie-banner").classList.add("hidden");
}
// ----FEATURE-PART-5B----
// ---------- 9) مشاركة المقتطفات (Highlight & Share) ----------
function initHighlightShare() {
    let shareBar = null;
    const hideBar = () => { if (shareBar) { shareBar.remove(); shareBar = null; } };
    document.addEventListener("mouseup", () => {
        setTimeout(() => {
            hideBar();
            const sel = window.getSelection ? window.getSelection().toString().trim() : "";
            if (sel.length < 20) return;
            const range = window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) return;
            shareBar = document.createElement("div");
            shareBar.className = "fixed flex items-center gap-1.5 bg-slate-900 dark:bg-slate-950 text-white rounded-lg shadow-xl px-2 py-1 z-[65]";
            shareBar.style.top = Math.max(8, rect.top - 44) + "px";
            shareBar.style.right = Math.max(8, Math.min(window.innerWidth - 140, rect.right - 140)) + "px";
            const msg = encodeURIComponent(`"${sel.slice(0, 200)}" — ${currentLang === "en" ? "via Dhuluiya Services app" : "عبر تطبيق خدمات الضلوعية"}`);
            const url = encodeURIComponent(window.location.href);
            shareBar.innerHTML = `<span class="text-[9px] font-black">${t("share")}</span>
                <a target="_blank" rel="noopener" href="https://api.whatsapp.com/send?phone=${TARGET_PHONE_NUMBER}&text=${msg}" class="text-emerald-400 hover:scale-110"><i class="fa-brands fa-whatsapp"></i></a>
                <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${msg}" class="text-blue-400 hover:scale-110"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=${msg}&url=${url}" class="text-sky-400 hover:scale-110"><i class="fa-brands fa-twitter"></i></a>`;
            document.body.appendChild(shareBar);
        }, 10);
    });
    document.addEventListener("mouseup", (e) => {
        if (shareBar && !shareBar.contains(e.target)) hideBar();
    });
    window.addEventListener("scroll", hideBar, { passive: true });
}
// ----FEATURE-PART-5C----
// ---------- 10) نظام التقييم بالنجوم ----------
function getUserRating(key) { try { return parseInt(localStorage.getItem("dhilo_myrating_" + key) || "0", 10); } catch (e) { return 0; } }
function getRatingsList(key) { return loadStoredArray("dhilo_ratings_log").filter(r => r.key === key); }
function getAvgRating(key) {
    const list = getRatingsList(key);
    if (!list.length) return 0;
    return list.reduce((s, r) => s + r.val, 0) / list.length;
}
function getRatingCount(key) { return getRatingsList(key).length; }
function setUserRating(n) {
    localStorage.setItem("dhilo_myrating_" + currentRestaurantKey, String(n));
    const log = loadStoredArray("dhilo_ratings_log");
    log.push({ key: currentRestaurantKey, val: n, ts: Date.now() });
    storeArray("dhilo_ratings_log", log.slice(-300));
    showToast(`${t("rated")} ${n} ★`);
    renderStars();
}

// ---------- 11) نظام الآراء (تعليقات مع تصويت) ----------
function getReviews(key) { return loadStoredArray("dhilo_reviews_" + key); }
function getReviewsCount(key) { return getReviews(key).length; }
function renderReviewsToggle() {
    const b = document.getElementById("reviews-toggle-btn");
    if (b) b.innerText = `💬 ${t("reviews")} (${getReviewsCount(currentRestaurantKey)})`;
}
function toggleReviews() {
    const box = document.getElementById("reviews-box");
    if (!box) return;
    box.classList.toggle("hidden");
    if (!box.classList.contains("hidden")) renderReviews();
}
function renderReviews() {
    const box = document.getElementById("reviews-box");
    if (!box) return;
    const key = currentRestaurantKey;
    const list = getReviews(key);
    const rows = list.slice().sort((a, b) => (b.up - b.down) - (a.up - a.down)).slice(0, 10).map((r, i) => `
        <div class="bg-slate-50 dark:bg-slate-700/40 rounded-lg p-2 text-[11px]">
            <div class="flex justify-between items-center">
                <p class="font-black">${r.name || t("anonymous")}</p>
                <span class="text-[10px] text-slate-400">${new Date(r.ts).toLocaleDateString()}</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 mt-0.5">${r.text}</p>
            <div class="flex gap-3 mt-1">
                <button onclick="voteReview(${i}, 1)" class="text-[11px] font-bold text-emerald-600">▲ ${r.up}</button>
                <button onclick="voteReview(${i}, -1)" class="text-[11px] font-bold text-red-500">▼ ${r.down}</button>
            </div>
        </div>`).join("");
    box.innerHTML = `
        <div class="grid grid-cols-1 gap-1.5">
            <input id="rev-name" type="text" placeholder="${t("your_name")}" class="border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-1.5 text-[11px]">
            <div class="flex gap-1.5">
                <input id="rev-text" type="text" placeholder="${t("review_ph")}" class="flex-1 border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-1.5 text-[11px]">
                <button onclick="addReview()" class="bg-brand-600 text-white text-[11px] font-bold px-3 rounded-lg">${t("send")}</button>
            </div>
        </div>
        <div class="space-y-1.5 mt-2">${rows || `<p class="text-[11px] text-slate-400">${t("no_reviews")}</p>`}</div>`;
}
function addReview() {
    const name = (document.getElementById("rev-name").value || "").trim();
    const text = (document.getElementById("rev-text").value || "").trim();
    if (!text) return alert(t("review_required"));
    const list = getReviews(currentRestaurantKey);
    list.push({ name: name || t("anonymous"), text, up: 0, down: 0, ts: Date.now() });
    storeArray("dhilo_reviews_" + currentRestaurantKey, list);
    renderReviewsToggle();
    renderReviews();
    showToast(t("review_added"));
}
function voteReview(idx, dir) {
    const key = currentRestaurantKey;
    const list = getReviews(key);
    if (!list[idx]) return;
    if (dir === 1) list[idx].up += 1; else list[idx].down += 1;
    storeArray("dhilo_reviews_" + key, list);
    renderReviews();
}
// ----FEATURE-PART-6A----
// ---------- 12) المستمع الصوتي للقائمة (Text-to-Speech) ----------
function speakMenu() {
    try {
        const synth = window.speechSynthesis || window.SpeechSynthesis;
        if (!synth) throw new Error("no-tts");
        synth.cancel && synth.cancel();
        const rest = restaurantsData[currentRestaurantKey];
        const itemsText = rest.items.map(i => `${displayName(i)} — ${i.price.toLocaleString()} ${t("iqd")}`).join("، ");
        const text = (currentLang === "en" && rest.nameEn ? rest.nameEn : rest.name) + ". " + itemsText;
        const utter = new (window.SpeechSynthesisUtterance || window.speechSynthesisUtterance)(text);
        utter.lang = currentLang === "en" ? "en-US" : "ar-IQ";
        utter.rate = 0.95;
        synth.speak(utter);
        showToast(t("listening"));
    } catch (e) {
        alert(t("tts_unsupported"));
    }
}

// ---------- 13) استطلاع الرأي السريع ----------
function loadPollVotes() { try { return JSON.parse(localStorage.getItem("dhilo_poll") || "[0,0,0]"); } catch (e) { return [0, 0, 0]; } }
function renderQuickPoll() {
    const el = document.getElementById("quick-poll");
    if (!el) return;
    const votes = loadPollVotes();
    const total = votes.reduce((s, v) => s + v, 0);
    const voted = localStorage.getItem("dhilo_poll_voted") === "1";
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 mt-4">
            <p class="font-black text-xs mb-2">📊 ${t("poll_q")}</p>
            ${voted ? renderPollResults(votes, total) : renderPollOptions()}
        </div>`;
}
function renderPollOptions() {
    const opts = [t("poll_opt1"), t("poll_opt2"), t("poll_opt3")];
    return opts.map((o, i) => `
        <label class="flex items-center gap-2 text-[11px] font-bold cursor-pointer py-1">
            <input type="radio" name="poll-opt" value="${i}" class="text-brand-600">
            <span>${o}</span>
        </label>`).join("") +
        `<button onclick="submitPoll()" class="w-full bg-brand-600 text-white text-[11px] font-bold py-2 rounded-lg mt-1">${t("vote")}</button>`;
}
function renderPollResults(votes, total) {
    const labels = [t("poll_opt1"), t("poll_opt2"), t("poll_opt3")];
    const max = Math.max(...votes, 1);
    return labels.map((l, i) => `
        <div class="mb-1">
            <div class="flex justify-between text-[10px] font-bold">
                <span>${l}</span><span>${votes[i]} (${total ? Math.round(votes[i] / total * 100) : 0}%)</span>
            </div>
            <div class="h-[6px] bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-brand-600 rounded-full" style="width:${Math.round(votes[i] / max * 100)}%"></div>
            </div>
        </div>`).join("") +
        `<p class="text-[10px] text-slate-400 font-bold mt-1">${t("poll_total")}: ${total}</p>`;
}
function submitPoll() {
    const sel = document.querySelector('input[name="poll-opt"]:checked');
    if (!sel) return alert(t("poll_required"));
    const votes = loadPollVotes();
    votes[parseInt(sel.value, 10)] += 1;
    localStorage.setItem("dhilo_poll", JSON.stringify(votes));
    localStorage.setItem("dhilo_poll_voted", "1");
    userPoints += 5; saveUserPoints();
    document.getElementById("user-points").innerText = userPoints;
    showToast(t("poll_thanks"));
    renderQuickPoll();
}
// ----FEATURE-PART-6B----
// ---------- 14) الحاسبة التفاعلية (صواني جماعية) ----------
let calcPersons = 4, calcTrayIndex = 0;
function getRestaurantTrays() {
    const rest = restaurantsData[currentRestaurantKey];
    if (!rest) return [];
    return rest.items.filter(i => i.category === "العروض والصواني");
}
function renderGroupCalculator() {
    const el = document.getElementById("group-calculator");
    if (!el) return;
    const trays = getRestaurantTrays();
    if (!trays.length) { el.classList.add("hidden"); return; }
    el.classList.remove("hidden");
    if (calcTrayIndex >= trays.length) calcTrayIndex = 0;
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 mt-3">
            <p class="font-black text-xs mb-2">🧮 ${t("calc_title")}</p>
            <div class="grid grid-cols-2 gap-2">
                <label class="text-[11px] font-bold">${t("calc_persons")}
                    <input id="calc-persons" type="number" min="1" max="60" value="${calcPersons}" onchange="calcUpdate(this.value, null)" class="w-full border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-1.5 text-xs mt-0.5">
                </label>
                <label class="text-[11px] font-bold">${t("calc_tray")}
                    <select id="calc-tray" onchange="calcUpdate(null, this.value)" class="w-full border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-1.5 text-xs mt-0.5">
                        ${trays.map((tr, i) => `<option value="${i}" ${i === calcTrayIndex ? "selected" : ""}>${displayName(tr)} — ${tr.price.toLocaleString()} ${t("iqd")}</option>`).join("")}
                    </select>
                </label>
            </div>
            <div id="calc-result" class="text-[11px] font-bold text-brand-700 dark:text-brand-300 mt-2"></div>
        </div>`;
    calcUpdate(null, null);
}
function calcUpdate(persons, trayIdx) {
    const trays = getRestaurantTrays();
    if (!trays.length) return;
    if (persons !== null && persons !== "") calcPersons = Math.max(1, parseInt(persons, 10) || 1);
    if (trayIdx !== null) calcTrayIndex = parseInt(trayIdx, 10) || 0;
    if (calcTrayIndex >= trays.length) calcTrayIndex = 0;
    const item = trays[calcTrayIndex];
    const traysNeeded = Math.max(1, Math.ceil(calcPersons / 4));
    const totalCost = traysNeeded * item.price;
    const per = Math.ceil(totalCost / calcPersons);
    const out = document.getElementById("calc-result");
    if (!out) return;
    out.innerHTML = `${t("calc_for")} <b>${calcPersons}</b> ${t("persons")} → <b>${traysNeeded}</b> ${t("trays")} • ${t("total")}: <span class="text-base">${totalCost.toLocaleString()} ${t("iqd")}</span> • ${t("per_person")}: ${per.toLocaleString()} ${t("iqd")}`;
}
// ----FEATURE-PART-7----
// ---------- 15) إشعارات الإثبات الاجتماعي ----------
const PROOF_NAMES = ["أحمد", "محمد", "زهراء", "حسين", "فاطمة", "علي", "نور", "سجاد"];
const PROOF_ACTIONS = ["طلب من", "أضاف للسلة من", "استلم طلبه من", "قيّم 5 نجوم على"];
function initSocialProof() {
    if (localStorage.getItem("dhilo_proof_done")) return;
    localStorage.setItem("dhilo_proof_done", "1");
    const show = () => {
        if (document.body.classList.contains("focus-mode")) return;
        const restKeys = Object.keys(restaurantsData);
        const rest = restaurantsData[restKeys[Math.floor(Math.random() * restKeys.length)]];
        const restName = currentLang === "en" && rest.nameEn ? rest.nameEn : rest.name;
        const name = PROOF_NAMES[Math.floor(Math.random() * PROOF_NAMES.length)];
        const act = PROOF_ACTIONS[Math.floor(Math.random() * PROOF_ACTIONS.length)];
        const el = document.createElement("div");
        el.className = "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-2 text-[10px] font-bold flex items-center gap-1.5 proof-pop";
        el.innerText = `👤 ${name} ${act} ${restName} • ${t("just_now")}`;
        const c = document.getElementById("social-proof-container");
        if (c) c.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 5000);
    };
    setTimeout(show, 8000);
    setInterval(show, 22000);
}

// ---------- 16) نافذة المغادرة الذكية (Exit-Intent) ----------
function initExitIntent() {
    if (sessionStorage.getItem("dhilo_exit_shown")) return;
    document.addEventListener("mouseleave", (e) => {
        if (!e.relatedTarget && e.clientY <= 0 && !sessionStorage.getItem("dhilo_exit_shown")) {
            sessionStorage.setItem("dhilo_exit_shown", "1");
            showOfferModal();
        }
    });
}

// ---------- 17) وضع التركيز (Distraction-Free) ----------
function toggleFocusMode() {
    const on = !document.body.classList.contains("focus-mode");
    document.body.classList.toggle("focus-mode", on);
    const exit = document.getElementById("focus-exit-bar");
    if (exit) exit.classList.toggle("hidden", !on);
    const btn = document.getElementById("focus-btn");
    if (btn) btn.innerHTML = on ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
    if (on) {
        document.getElementById("announcement-bar").classList.add("hidden");
        document.body.classList.remove("has-announcement");
    } else {
        renderAnnouncementBar();
    }
    showToast(on ? t("focus_on") : t("focus_off"));
}

// ---------- 18) الفهرس السريع (Interactive Table of Contents) ----------
function openIndexDrawer() {
    const el = document.getElementById("index-drawer");
    const services = [
        { key: "restaurants", icon: "🍽", label: t("nav_restaurants") },
        { key: "grocery", icon: "🛒", label: t("nav_grocery") },
        { key: "taxi", icon: "🚕", label: t("nav_taxi") },
        { key: "pharmacy", icon: "💊", label: t("nav_pharmacy") },
        { key: "maintenance", icon: "🔧", label: t("nav_maintenance") }
    ];
    const restItems = Object.keys(restaurantsData).map(k => {
        const r = restaurantsData[k];
        return `<div onclick="pickRestaurantFromIndex('${k}')" class="px-3 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-[11px] font-bold flex items-center gap-2">
            ${r.logo} ${currentLang === "en" && r.nameEn ? r.nameEn : r.name}
            <span class="text-[10px] text-slate-400">(${r.items.length})</span>
        </div>`;
    }).join("");
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">📑 ${t("index_title")}</h3>
                <button onclick="closeIndexDrawer()" class="text-slate-400 hover:text-slate-600 text-lg px-1">&times;</button>
            </div>
            ${services.map(s => `
                <div onclick="pickIndex('${s.key}')" class="px-3 py-2.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-[11px] font-bold flex items-center gap-2">
                    ${s.icon} ${s.label}
                </div>`).join("")}
            <div class="pt-2 font-black text-[11px] text-slate-500">🍽 ${t("restaurant_menus")}</div>
            ${restItems}
        </div>`;
    el.classList.remove("hidden");
}
function pickIndex(tab) { closeIndexDrawer(); switchMainTab(tab); }
function pickRestaurantFromIndex(key) { closeIndexDrawer(); switchMainTab("restaurants"); selectRestaurant(key); }
function closeIndexDrawer() { document.getElementById("index-drawer").classList.add("hidden"); }
// ----FEATURE-PART-8----
// ---------- 19) الأسئلة الشائعة (Accordion FAQ) ----------
function renderFAQ() {
    const el = document.getElementById("faq-modal");
    if (!el) return;
    const faqs = [
        [t("faq1_q"), t("faq1_a")],
        [t("faq2_q"), t("faq2_a")],
        [t("faq3_q"), t("faq3_a")],
        [t("faq4_q"), t("faq4_a")],
        [t("faq5_q"), t("faq5_a")]
    ];
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 max-h-[85vh] overflow-y-auto">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">❓ ${t("faq_title")}</h3>
                <button onclick="closeFAQ()" class="text-slate-400 hover:text-slate-600 text-lg px-1">&times;</button>
            </div>
            ${faqs.map((f, i) => `
                <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mt-2">
                    <button onclick="toggleFaqItem(${i})" class="w-full text-right flex justify-between items-center gap-2 px-3 py-2.5 text-[11px] font-bold bg-slate-50 dark:bg-slate-700/40">
                        ${f[0]} <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
                    </button>
                    <div id="faq-body-${i}" class="hidden px-3 py-2.5 text-[11px] text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700">
                        ${f[1]}
                    </div>
                </div>`).join("")}
        </div>`;
}
function toggleFaqItem(i) {
    const body = document.getElementById("faq-body-" + i);
    if (body) body.classList.toggle("hidden");
}
function openFAQ() { renderFAQ(); document.getElementById("faq-modal").classList.remove("hidden"); }
function closeFAQ() { document.getElementById("faq-modal").classList.add("hidden"); }

// ---------- 20) الخريطة التفاعلية + تحديد الموقع ----------
function openMapModal() {
    const el = document.getElementById("map-modal");
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 space-y-2">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">🗺️ ${t("map_title")}</h3>
                <button onclick="closeMapModal()" class="text-slate-400 hover:text-slate-600 text-lg px-1">&times;</button>
            </div>
            <div class="rounded-xl overflow-hidden h-52 border border-slate-200 dark:border-slate-700">
                <iframe class="w-full h-full" loading="lazy" title="map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=43.1500,33.9500,43.4000,34.0500&layer=mapnik&marker=34.0000,43.2700"></iframe>
            </div>
            <div class="flex flex-wrap gap-2">
                <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%B6%D9%84%D9%88%D8%B9%D9%8A%D8%A9" class="flex-1 bg-brand-600 text-white text-[11px] font-bold py-2 rounded-lg text-center">${t("map_open_google")} 🌐</a>
                <button onclick="locateMe()" class="flex-1 bg-emerald-600 text-white text-[11px] font-bold py-2 rounded-lg text-center">📍 ${t("map_locate")}</button>
            </div>
        </div>`;
    el.classList.remove("hidden");
}
function closeMapModal() { document.getElementById("map-modal").classList.add("hidden"); }
function locateMe() {
    if (!navigator.geolocation) return alert(t("gps_unsupported"));
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            try {
                const lat = pos.coords ? pos.coords.latitude : pos.latitude;
                const lon = pos.coords ? pos.coords.longitude : pos.longitude;
                const inp = document.getElementById("taxi-from");
                if (inp) inp.value = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
                closeMapModal();
                switchMainTab("taxi");
                showToast("📍 " + t("gps_ok"));
            } catch (e) { alert(t("gps_denied")); }
        },
        () => alert(t("gps_denied")),
        { timeout: 8000 }
    );
}
// ----FEATURE-PART-9A----
// ---------- 21) لوحة التحكم الشخصية ----------
function openDashboard() {
    const el = document.getElementById("dashboard-modal");
    const recent = loadStoredArray("dhilo_recent");
    const orders = parseInt(localStorage.getItem("dhilo_orders") || "0", 10);
    const refs = parseInt(localStorage.getItem("dhilo_ref_count") || "0", 10);
    const news = localStorage.getItem("dhilo_newsletter") === "1" ? t("yes") : t("no");
    const code = getReferralCode();
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 space-y-3 max-h-[85vh] overflow-y-auto">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">👤 ${t("dashboard_title")}</h3>
                <button onclick="closeDashboard()" class="text-slate-400 hover:text-slate-600 text-lg px-1">&times;</button>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-3 space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-xs">🪙 ${t("your_points")}</span>
                    <span class="font-black text-brand-700 dark:text-brand-300 text-sm">${userPoints} ${t("pts")}</span>
                </div>
                <div id="tier-progress"></div>
            </div>
            <button onclick="closeDashboard(); openOrderHistory()" class="w-full bg-slate-100 dark:bg-slate-700 font-bold text-xs py-2 rounded-lg">🧾 ${t("history_title")}</button>
            <div class="grid grid-cols-2 gap-2 text-center">
                <div class="bg-slate-100 dark:bg-slate-700 rounded-xl p-2.5"><p class="font-black text-sm">${orders}</p><p class="text-[10px] text-slate-500">${t("dash_orders")}</p></div>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-xl p-2.5"><p class="font-black text-sm">${favorites.length}</p><p class="text-[10px] text-slate-500">${t("dash_favs")}</p></div>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-xl p-2.5"><p class="font-black text-sm">${refs}</p><p class="text-[10px] text-slate-500">${t("dash_refs")}</p></div>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-xl p-2.5"><p class="font-black text-sm">${news}</p><p class="text-[10px] text-slate-500">${t("dash_news")}</p></div>
            </div>
            <p class="font-black text-[11px] mt-1">${t("recent_viewed")}</p>
            <div class="flex flex-wrap gap-1.5">
                ${recent.map(r => `<span class="bg-slate-100 dark:bg-slate-700 text-[10px] font-bold px-2 py-1 rounded-lg">${r}</span>`).join("") || `<span class="text-[10px] text-slate-400">${t("no_recent")}</span>`}
            </div>
                        <p class="font-black text-[11px] mt-1">${t("referral_code")}</p>
            <div class="flex gap-2 items-center">
                <code class="flex-1 bg-slate-100 dark:bg-slate-700 font-black text-xs px-2 py-1.5 rounded-lg" id="dash-ref-code">${code}</code>
                <button onclick="copyRefCode()" class="bg-brand-600 text-white text-[10px] font-bold px-2 py-1.5 rounded-lg" title="copy">📋</button>
            </div>
        </div>`;
    el.classList.remove("hidden");
    renderTierUI();
}
function closeDashboard() { document.getElementById("dashboard-modal").classList.add("hidden"); }
function getReferralCode() {
    let code = localStorage.getItem("dhilo_ref_code");
    if (!code) {
        code = "DHILO" + Math.random().toString(36).slice(2, 6).toUpperCase();
        localStorage.setItem("dhilo_ref_code", code);
    }
    return code;
}
function copyRefCode() {
    const code = getReferralCode();
    if (navigator.clipboard) { navigator.clipboard.writeText(code); showToast(t("code_copied")); }
    else { prompt(t("code_copied"), code); }
}
// ----FEATURE-PART-9B----
// ---------- 22) النشرة البريدية المجزأة ----------
function renderNewsletter() {
    const el = document.getElementById("newsletter-box");
    if (!el) return;
    const subscribed = localStorage.getItem("dhilo_newsletter") === "1";
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <p class="font-black text-xs mb-1.5">📧 ${t("news_title")}</p>
            ${subscribed
                ? `<p class="text-[11px] font-bold text-emerald-600">✅ ${t("news_done")}</p>`
                : `
            <div class="flex flex-wrap gap-1 my-1.5">
                ${["news_t1", "news_t2", "news_t3", "news_t4"].map(k => `
                    <label class="flex items-center gap-1 text-[10px] font-bold bg-slate-100 dark:bg-slate-700 px-1.5 py-1 rounded-md cursor-pointer">
                        <input type="checkbox" class="news-topic" value="${k}" checked> ${t(k)}
                    </label>`).join("")}
            </div>
            <div class="flex gap-2 items-center">
                <input id="news-name" type="text" placeholder="${t("your_name")}" class="flex-1 min-w-0 border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-2 text-xs">
                <input id="news-phone" type="tel" placeholder="${t("phone")}" class="flex-1 min-w-0 border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg p-2 text-xs">
            </div>
            <button onclick="subscribeNewsletter()" class="w-full bg-brand-600 text-white font-bold text-[11px] py-2 rounded-lg mt-1.5">${t("news_btn")}</button>`}
        </div>`;
}
function subscribeNewsletter() {
    const topics = Array.from(document.querySelectorAll(".news-topic:checked")).map(c => c.value).join("، ");
    const name = document.getElementById("news-name") ? document.getElementById("news-name").value.trim() : "";
    if (!name) return alert(t("news_name_required"));
    localStorage.setItem("dhilo_newsletter", "1");
    localStorage.setItem("dhilo_news_name", name);
    localStorage.setItem("dhilo_news_topics", topics);
    userPoints += 10; saveUserPoints();
    document.getElementById("user-points").innerText = userPoints;
    addCoupon("NEWS15", 15);
    if (typeof confetti === "function") confetti({ particleCount: 80, spread: 60 });
    showToast(`${t("news_done")} (+10 ${t("pts")})`);
    renderNewsletter();
}

// ---------- 23) برنامج الإحالة (Share & Earn) ----------
function renderReferral() {
    const el = document.getElementById("referral-box");
    if (!el) return;
    const code = getReferralCode();
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 mt-2">
            <p class="font-black text-xs mb-1">🎁 ${t("ref_title")}</p>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">${t("ref_desc")}</p>
            <div class="flex gap-2 items-center">
                <code class="font-black text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1.5 rounded-lg">${code}</code>
                <button onclick="shareReferral()" class="flex-1 bg-emerald-600 text-white font-bold text-[11px] py-2 rounded-lg">
                    <i class="fa-brands fa-whatsapp text-sm"></i> ${t("ref_share")}
                </button>
            </div>
        </div>`;
}
function shareReferral() {
    const code = getReferralCode();
    const name = localStorage.getItem("dhilo_news_name") || t("ref_default_name");
    const msg = t("ref_msg").replace("{code}", code).replace("{name}", name);
    window.open(`https://api.whatsapp.com/send?phone=${TARGET_PHONE_NUMBER}&text=${encodeURIComponent(msg)}`, "_blank");
    const cnt = parseInt(localStorage.getItem("dhilo_ref_count") || "0", 10) + 1;
    localStorage.setItem("dhilo_ref_count", String(cnt));
    userPoints += 20; saveUserPoints();
    document.getElementById("user-points").innerText = userPoints;
    if (cnt === 1) addCoupon("REF20", 20);
    showToast(t("ref_reward"));
}

/* =====================================================================
   15 إضافة موزعة + 10 ميزات استثنائية — الوظائف
   ===================================================================== */

// ---------- (1) فرز الأصناف ----------
let menuSortMode = "default";
function setMenuSort(mode) { menuSortMode = mode; renderMenuItems(); }

// ---------- (2) فلتر الأكثر طلباً ----------
let bestFilterActive = false;
function toggleBestFilter() {
    bestFilterActive = !bestFilterActive;
    const btn = document.getElementById("best-filter-btn");
    if (btn) btn.classList.toggle("ring-2", bestFilterActive);
    renderMenuItems();
}

// ---------- (4) قوالب المسواك الجاهزة ----------
const GROCERY_TEMPLATES = {
    veg: "2 كيلو طماطم\n1 كيلو خيار\n1 كيلو بصل\nنصف كيلو فلفل\nعنق ثوم\n1 كيلو بطاطا",
    basic: "2 كيلو أرز\n1 لتر زيت\nعلبة معجون\nشاي\n1 كيلو سكر\nخبز",
    breakfast: "حليب 2 لتر\nجبن\nبيض 30 حبة\nزيتون\nعسل\nشاي أخضر"
};
function applyGroceryTemplate(key) {
    const ta = document.getElementById("custom-grocery-text");
    if (!ta || !GROCERY_TEMPLATES[key]) return;
    ta.value = ta.value ? ta.value + "\n" + GROCERY_TEMPLATES[key] : GROCERY_TEMPLATES[key];
    showToast(t("template_added"));
}

// ---------- (5) تحذير تجاوز الميزانية ----------
function checkGroceryBudget() {
    const warn = document.getElementById("budget-warning");
    if (!warn) return;
    const budgetInput = document.getElementById("grocery-budget");
    const budget = budgetInput ? (parseFloat(budgetInput.value) || 0) : 0;
    const spent = cart.reduce((s, i) => s + i.price * i.qty, 0);
    if (budget > 0 && spent > budget) {
        warn.classList.remove("hidden");
        warn.innerText = "⚠️ " + (currentLang === "en" ? "Over budget by " : "تجاوزت الميزانية بـ ") + (spent - budget).toLocaleString() + " " + t("iqd");
    } else {
        warn.classList.add("hidden");
    }
}

// ---------- (6) وجهات وصلني المحفوظة ----------
function renderSavedDestinations() {
    const box = document.getElementById("saved-destinations");
    if (!box) return;
    const list = loadStoredArray("dhilo_destinations");
    const saveBtn = `<button type="button" onclick="saveDestination()" class="text-[10px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 px-2 py-1 rounded-lg">+ ${currentLang === "en" ? "Save current destination" : "حفظ الوجهة الحالية"}</button>`;
    box.innerHTML = list.map((d, i) => `
        <span class="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg flex items-center gap-1.5">
            <button type="button" onclick="fillDestination(${i})" class="flex items-center gap-1">📍 ${d}</button>
            <button type="button" onclick="removeDestination(${i})" class="text-red-400 font-black">✕</button>
        </span>`).join("") + saveBtn;
}
function fillDestination(i) {
    const d = loadStoredArray("dhilo_destinations")[i];
    if (!d) return;
    const inp = document.getElementById("taxi-to");
    if (inp) inp.value = d;
    showToast(t("dest_pick") + d);
}
function saveDestination() {
    const inp = document.getElementById("taxi-to");
    const val = inp ? inp.value.trim() : "";
    if (!val) { alert(t("dest_required")); return; }
    const list = loadStoredArray("dhilo_destinations");
    if (!list.includes(val)) { list.unshift(val); storeArray("dhilo_destinations", list.slice(0, 6)); }
    renderSavedDestinations();
    showToast(t("dest_saved"));
}
function removeDestination(i) {
    const list = loadStoredArray("dhilo_destinations");
    list.splice(i, 1);
    storeArray("dhilo_destinations", list);
    renderSavedDestinations();
}
/* ===== FEATURE-PACK-2A ===== */

// ---------- (7) سجل رحلات وصلني ----------
function logTrip(entry) {
    const h = loadStoredArray("dhilo_trips");
    h.unshift(entry);
    storeArray("dhilo_trips", h.slice(0, 5));
    renderTripHistory();
}
function renderTripHistory() {
    const cnt = document.getElementById("trip-count");
    const box = document.getElementById("trip-history");
    const h = loadStoredArray("dhilo_trips");
    if (cnt) cnt.innerText = h.length;
    if (!box) return;
    box.innerHTML = h.map(tr => `
        <div class="bg-slate-50 dark:bg-slate-700/40 rounded-lg p-2 text-[10px]">
            <div class="flex justify-between items-center">
                <span class="font-black">${tr.from} → ${tr.to}</span>
                <span class="text-slate-400">${new Date(tr.ts).toLocaleDateString()}</span>
            </div>
            <span class="text-slate-500 dark:text-slate-400">${tr.type} • ${tr.fare}</span>
        </div>`).join("") || `<p class="text-slate-400 text-[10px]">${t("trip_empty")}</p>`;
}

// ---------- (8) رقائق الأدوية الشائعة ----------
function pharmacyQuickAdd(cat) {
    const ta = document.getElementById("pharmacy-text");
    if (!ta) return;
    ta.value = (ta.value ? ta.value + "\n" : "") + cat + ": ";
    ta.focus();
}

// ---------- (12) إعادة آخر طلب ----------
function saveLastOrder() {
    if (!cart.length) return;
    storeArray("dhilo_last_order", [{ items: cart.map(i => ({ ...i })), ts: Date.now() }]);
}
function reorderLast() {
    const lo = loadStoredArray("dhilo_last_order")[0];
    if (!lo || !lo.items || !lo.items.length) { alert(t("reorder_none")); return; }
    lo.items.forEach(it => {
        const ex = cart.find(c => c.id === it.id);
        if (ex) ex.qty += it.qty;
        else cart.push({ id: it.id, name: it.name, price: it.price, storeName: it.storeName, qty: it.qty });
    });
    updateCartUI();
    showToast(t("reorder_done"));
}

// ---------- (13) إكرامية السائق ----------
let driverTip = 0;
function renderTipButtons() {
    const box = document.getElementById("tip-buttons");
    if (!box) return;
    box.innerHTML = [0, 500, 1000, 2000].map(v => `
        <button type="button" onclick="setTip(${v})" class="text-[10px] font-black px-2 py-1 rounded-lg border ${driverTip === v ? "bg-brand-600 text-white border-brand-600" : "border-slate-300 dark:border-slate-600"}">${v === 0 ? t("tip_none") : v.toLocaleString()}</button>`).join("");
}
function setTip(amount) {
    driverTip = amount;
    renderTipButtons();
    updateCartUI();
}

// ---------- جدولة الطلب ----------
function toggleScheduleInput() {
    const cb = document.getElementById("schedule-order");
    const dt = document.getElementById("schedule-datetime");
    if (cb && dt) dt.classList.toggle("hidden", !cb.checked);
}
/* ===== FEATURE-PACK-2B ===== */

// ---------- (B3) مستويات الولاء ----------
const LOYALTY_TIERS = [
    { min: 0, name: "برونزي", nameEn: "Bronze", icon: "🥉", next: 200 },
    { min: 200, name: "فضي", nameEn: "Silver", icon: "🥈", next: 500 },
    { min: 500, name: "ذهبي", nameEn: "Gold", icon: "🥇", next: 1000 },
    { min: 1000, name: "بلاتيني", nameEn: "Platinum", icon: "💎", next: null }
];
function getTier(points) {
    let tier = LOYALTY_TIERS[0];
    LOYALTY_TIERS.forEach(tr => { if (points >= tr.min) tier = tr; });
    return tier;
}
function renderTierUI() {
    const box = document.getElementById("tier-progress");
    if (!box) return;
    const tier = getTier(userPoints);
    const tierName = currentLang === "en" ? tier.nameEn : tier.name;
    let pct = 100, remaining = t("tier_max");
    if (tier.next) {
        pct = Math.min(100, Math.round(((userPoints - tier.min) / (tier.next - tier.min)) * 100));
        remaining = (tier.next - userPoints) + " " + t("pts") + " →";
    }
    box.innerHTML = `
        <div class="flex justify-between text-[10px] font-black mb-0.5">
            <span>${tier.icon} ${tierName}</span><span>${remaining}</span>
        </div>
        <div class="h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-l from-amber-400 to-amber-600 rounded-full" style="width:${pct}%"></div>
        </div>`;
}

// ---------- (B1) مركز الإشعارات ----------
function loadNotifications() { return loadStoredArray("dhilo_notifications"); }
function pushNotification(text) {
    const list = loadNotifications();
    list.unshift({ text, ts: Date.now(), read: false });
    storeArray("dhilo_notifications", list.slice(0, 30));
    updateNotifBadge();
}
function updateNotifBadge() {
    const b = document.getElementById("notif-badge");
    if (!b) return;
    const n = loadNotifications().filter(x => !x.read).length;
    b.classList.toggle("hidden", n === 0);
    b.innerText = n;
}
function openNotifications() {
    const el = document.getElementById("notifications-modal");
    if (!el) return;
    const list = loadNotifications();
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 max-h-[85vh] overflow-y-auto">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">🔔 ${t("notif_title")}</h3>
                <div class="flex items-center gap-2">
                    <button onclick="markAllRead()" class="text-[10px] font-bold text-brand-600 underline">${t("notif_read_all")}</button>
                    <button onclick="closeNotifications()" class="text-slate-400 text-lg px-1">&times;</button>
                </div>
            </div>
            <div class="space-y-1.5 mt-2">
                ${list.map(n => `
                <div class="rounded-lg p-2 text-[11px] font-bold border ${n.read ? "border-slate-100 dark:border-slate-700 text-slate-500" : "border-brand-200 bg-blue-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200"}">
                    <p>${n.text}</p>
                    <p class="text-[9px] text-slate-400 mt-0.5">${new Date(n.ts).toLocaleString()}</p>
                </div>`).join("") || `<p class="text-[11px] text-slate-400 text-center py-6">${t("notif_empty")}</p>`}
            </div>
        </div>`;
    el.classList.remove("hidden");
}
function closeNotifications() { const el = document.getElementById("notifications-modal"); if (el) el.classList.add("hidden"); }
function markAllRead() {
    storeArray("dhilo_notifications", loadNotifications().map(n => ({ ...n, read: true })));
    updateNotifBadge();
    openNotifications();
}
/* ===== FEATURE-PACK-2C ===== */

// ---------- (B2) محفظة الكوبونات ----------
function loadCoupons() { return loadStoredArray("dhilo_coupons"); }
function addCoupon(code, discount) {
    const list = loadCoupons();
    if (!list.some(c => c.code === code)) {
        list.unshift({ code, discount, used: false, ts: Date.now() });
        storeArray("dhilo_coupons", list.slice(0, 10));
        pushNotification((currentLang === "en" ? "🎟️ New coupon in your wallet: " : "🎟️ كوبون جديد في محفظتك: ") + code + " (-" + discount + "%)");
    }
    renderCouponWallet();
}
function renderCouponWallet() {
    const box = document.getElementById("coupon-wallet");
    if (!box) return;
    const list = loadCoupons().filter(c => !c.used);
    box.innerHTML = list.length
        ? `<p class="text-[10px] font-black text-slate-400">🎟️ ${t("wallet_title")}</p>` + list.map((c, i) => `
            <button type="button" onclick="applyWalletCoupon(${i})" class="w-full flex justify-between items-center border border-dashed border-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-2 py-1.5 text-[10px] font-black">
                <span>${c.code}</span><span class="text-emerald-600">-${c.discount}%</span>
            </button>`).join("")
        : "";
}
function applyWalletCoupon(i) {
    const c = loadCoupons()[i];
    if (!c) return;
    const input = document.getElementById("promo-code-input");
    if (input) input.value = c.code;
    applyPromoCode();
}

// ---------- (B4) سجل الطلبات ----------
function logOrder(type, summary, total) {
    const h = loadStoredArray("dhilo_order_history");
    h.unshift({ type, summary, total, ts: Date.now() });
    storeArray("dhilo_order_history", h.slice(0, 20));
}
function typeLabel(type) {
    const map = { cart: "type_cart", taxi: "type_taxi", pharmacy: "type_pharmacy", maintenance: "type_maintenance" };
    return t(map[type] || "type_cart");
}
function openOrderHistory() {
    const el = document.getElementById("history-modal");
    if (!el) return;
    const h = loadStoredArray("dhilo_order_history");
    el.innerHTML = `
        <div class="bg-white dark:bg-slate-800 w-full max-w-sm rounded-2xl p-4 max-h-[85vh] overflow-y-auto">
            <div class="flex justify-between items-center">
                <h3 class="font-black text-sm">🧾 ${t("history_title")}</h3>
                <button onclick="closeOrderHistory()" class="text-slate-400 text-lg px-1">&times;</button>
            </div>
            <div class="space-y-2 mt-2">
                ${h.map(o => `
                <div class="border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-[11px]">
                    <div class="flex justify-between items-center">
                        <span class="font-black">${typeLabel(o.type)}</span>
                        <span class="text-[9px] text-slate-400">${new Date(o.ts).toLocaleString()}</span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 mt-0.5">${o.summary}</p>
                    <p class="font-black text-brand-600 dark:text-brand-400 mt-0.5">${o.total}</p>
                </div>`).join("") || `<p class="text-center text-slate-400 text-xs py-8">${t("history_empty")}</p>`}
            </div>
        </div>`;
    el.classList.remove("hidden");
}
function closeOrderHistory() { const el = document.getElementById("history-modal"); if (el) el.classList.add("hidden"); }
/* ===== FEATURE-PACK-2D ===== */

// ---------- (B5) الطلب المعتاد ----------
function bumpItemFreq(id, name, price, storeName) {
    const freq = loadStoredArray("dhilo_freq");
    const e = freq.find(f => f.id === id);
    if (e) e.count += 1;
    else {
        const full = findItemById(id);
        freq.push({ id, name, nameEn: full ? full.nameEn : "", price, storeName, count: 1 });
    }
    storeArray("dhilo_freq", freq.slice(-30));
}
function expressOrder() {
    const top = loadStoredArray("dhilo_freq").sort((a, b) => b.count - a.count).slice(0, 3);
    if (!top.length) { alert(t("express_empty")); return; }
    top.forEach(f => {
        const ex = cart.find(c => c.id === f.id);
        if (ex) ex.qty += 1;
        else cart.push({ id: f.id, name: f.name, price: f.price, storeName: f.storeName, qty: 1 });
    });
    updateCartUI();
    toggleCartModal();
    showToast(t("express_done"));
}

// ---------- (B7) فاجئني 🎲 ----------
function surpriseMe() {
    const rest = restaurantsData[currentRestaurantKey];
    if (!rest || !rest.items.length) return;
    const item = rest.items[Math.floor(Math.random() * rest.items.length)];
    Swal.fire({
        title: t("surprise_title"),
        html: `<p style="font-size:34px;margin:8px 0">${rest.logo}</p><p style="font-weight:900;font-size:16px">${displayName(item)}</p><p style="color:#2563eb;font-weight:900;margin-top:4px">${item.price.toLocaleString()} ${t("iqd")}</p>`,
        showCancelButton: true,
        confirmButtonText: `${t("add")} +`,
        cancelButtonText: t("cancel"),
        confirmButtonColor: "#2563eb"
    }).then(r => { if (r.isConfirmed) addToCart(item.id, displayName(item), item.price, (currentLang === "en" && rest.nameEn) ? rest.nameEn : rest.name); });
}

// ---------- (B8) مقترح لك (توصيات ذكية) ----------
function findItemById(id) {
    for (const k of Object.keys(restaurantsData)) {
        const it = restaurantsData[k].items.find(i => i.id === id);
        if (it) return { ...it, restKey: k, logo: restaurantsData[k].logo, restName: (currentLang === "en" && restaurantsData[k].nameEn) ? restaurantsData[k].nameEn : restaurantsData[k].name };
    }
    return null;
}
function renderRecommendations() {
    const strip = document.getElementById("recommendations-strip");
    if (!strip) return;
    const recs = [];
    const seen = new Set();
    favorites.forEach(id => {
        const it = findItemById(id);
        if (it && !seen.has(it.id)) { seen.add(it.id); recs.push(it); }
    });
    loadStoredArray("dhilo_freq").sort((a, b) => b.count - a.count).forEach(f => {
        if (recs.length >= 6) return;
        const it = findItemById(f.id);
        if (it && !seen.has(it.id)) { seen.add(it.id); recs.push(it); }
    });
    strip.innerHTML = recs.length ? `<span class="text-[10px] font-black text-slate-400 whitespace-nowrap self-center">${t("rec_title")}</span>` + recs.map(it => `
        <button type="button" onclick="quickAddRec('${it.id}')" class="whitespace-nowrap bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-2 text-[10px] font-bold flex items-center gap-1.5">
            <span>${it.logo || "🍽️"}</span><span>${displayName(it)}</span>
            <span class="text-brand-600 dark:text-brand-400">${it.price.toLocaleString()}</span>
            <i class="fa-solid fa-circle-plus text-brand-600"></i>
        </button>`).join("") : "";
}
function quickAddRec(id) {
    const it = findItemById(id);
    if (!it) return;
    addToCart(it.id, displayName(it), it.price, it.restName);
}
/* ===== FEATURE-PACK-2E ===== */

// ---------- (B9) تتبع مباشر محسّن ----------
let trackingStep = 0, trackingTimer = null;
function trackStepText(step) {
    const steps = currentLang === "en"
        ? ["Order received ✅", "Preparing your order 🔥", "Driver on the way 🛵", "Delivered 🎉"]
        : ["تم استلام الطلب ✅", "جاري تحضير طلبك 🔥", "السائق في الطريق 🛵", "تم التسليم 🎉"];
    return steps[step - 1] || "";
}
function renderTrackerSteps() {
    const bar = document.getElementById("active-tracker-bar");
    if (bar && trackingStep > 0) {
        const span = bar.querySelector("span");
        const eta = trackingStep >= 4 ? t("delivered") : `${t("eta")} ~${(4 - trackingStep) * 5 + 5} ${t("minutes")}`;
        if (span) span.innerHTML = `<i class="fa-solid fa-motorcycle animate-bounce ml-1"></i> ${trackStepText(trackingStep)} • ${eta}`;
    }
    document.querySelectorAll("#tracker-modal .space-y-4 > div").forEach((row, i) => {
        row.classList.toggle("text-slate-400", i > trackingStep - 1);
        row.classList.toggle("animate-pulse", i === trackingStep - 1);
    });
}
function startTracking() {
    trackingStep = 1;
    const bar = document.getElementById("active-tracker-bar");
    if (bar) bar.classList.remove("hidden");
    renderTrackerSteps();
    localStorage.setItem("dhilo_tracking", JSON.stringify({ step: 1, ts: Date.now() }));
    if (trackingTimer) clearInterval(trackingTimer);
    trackingTimer = setInterval(() => {
        if (trackingStep < 4) {
            // إذا كان هناك طلب تديره الإدارة فالإدارة تتحكم بإيقاع الحالات
            const adminActive = loadStoredArray("dhilo_admin_orders").some(o => o.status && o.status !== "delivered" && o.status !== "rejected" && (Date.now() - o.ts) < 60 * 60 * 1000);
            if (adminActive) { renderTrackerSteps(); return; }
            trackingStep++;
            renderTrackerSteps();
            localStorage.setItem("dhilo_tracking", JSON.stringify({ step: trackingStep, ts: Date.now() }));
            if (trackingStep === 4) pushNotification(currentLang === "en" ? "🎉 Your order has been delivered — enjoy!" : "🎉 تم تسليم طلبك بنجاح — بالعافية!");
        } else if (trackingTimer) {
            clearInterval(trackingTimer);
            trackingTimer = null;
        }
    }, 25000);
}
function restoreTracking() {
    try {
        const raw = localStorage.getItem("dhilo_tracking");
        if (!raw) return;
        const st = JSON.parse(raw);
        const elapsed = Date.now() - st.ts;
        if (elapsed > 30 * 60 * 1000) { localStorage.removeItem("dhilo_tracking"); return; }
        trackingStep = Math.min(4, (st.step || 1) + Math.floor(elapsed / 25000));
        const bar = document.getElementById("active-tracker-bar");
        if (bar) bar.classList.remove("hidden");
        renderTrackerSteps();
    } catch (e) {}
}

// ---------- (B10) مؤشر الاتصال بالإنترنت ----------
function initConnectionMonitor() {
    const banner = document.getElementById("offline-banner");
    const update = () => {
        if (!banner) return;
        const off = !navigator.onLine;
        banner.classList.toggle("hidden", !off);
        if (off) banner.innerText = currentLang === "en" ? "⚠️ No internet connection — some features may not work" : "⚠️ لا يوجد اتصال بالإنترنت — بعض الميزات قد لا تعمل";
    };
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    update();
}

// ---------- مزامنة طلبات الإدارة (لوحة admin.html) ----------
// كل طلب يُرسل من الموقع يُسجل في قائمة الإدارة، وتغييرات الحالة من لوحة الإدارة
// تصل للزبون فوراً كإشعارات + تحديث لشريط التتبع (نفس مساحة localStorage)
function createAdminOrder(type, customer, phone, summary, total, gps) {
    const orders = loadStoredArray("dhilo_admin_orders");
    const id = "DHL" + String(Date.now()).slice(-6);
    orders.unshift({ id, type, customer, phone, summary, total, gps: gps || null, ts: Date.now(), status: "pending" });
    storeArray("dhilo_admin_orders", orders.slice(0, 50));
    return id;
}
function syncAdminOrderStatus() {
    const orders = loadStoredArray("dhilo_admin_orders");
    const active = orders.find(o => o.status && o.status !== "delivered" && o.status !== "rejected");
    if (!active) return;
    const map = { received: 1, preparing: 2, onway: 3, delivered: 4 };
    const step = map[active.status];
    if (step && trackingStep !== step) {
        trackingStep = step;
        const bar = document.getElementById("active-tracker-bar");
        if (bar) bar.classList.remove("hidden");
        renderTrackerSteps();
    }
}
function initAdminSync() {
    // تخزين حدث فوري: عندما تعدل لوحة الإدارة البيانات من تبويب آخر يصل التحديث هنا لحظياً
    window.addEventListener("storage", (e) => {
        if (e.key === "dhilo_admin_orders" || e.key === "dhilo_notifications" || e.key === "dhilo_tracking") {
            updateNotifBadge();
            syncAdminOrderStatus();
        }
    });
    // احتياط: فحص دوري كل 10 ثوانٍ
    setInterval(syncAdminOrderStatus, 10000);
    syncAdminOrderStatus();
}

/* ===== نهاية الميزات المضافة ===== */