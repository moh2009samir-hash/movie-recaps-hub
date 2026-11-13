import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf1Jy5JXAXicOjjMa-RpusehjMybwckxM",
  authDomain: "ecaps-hub.firebaseapp.com",
  projectId: "ecaps-hub",
  storageBucket: "ecaps-hub.firebasestorage.app",
  messagingSenderId: "191242616734",
  appId: "1:191242616734:web:8300b75ad60224a785a08f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMoviesFromFirebase() {
    try {
        let querySnapshot = await getDocs(collection(db, "movies"));
        if (querySnapshot.empty) {
            querySnapshot = await getDocs(collection(db, "أفلام"));
        }
        
        let newMovies = [];
        let index = 1; 
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            
            let ytUrl = data.youtubeLink || data['رابط يوتيوب'] || "";
            let ytId = ytUrl; 
            
            if(ytUrl.includes("youtu.be/")) {
                ytId = ytUrl.split("youtu.be/")[1].split("?")[0];
            } else if(ytUrl.includes("v=")) {
                ytId = ytUrl.split("v=")[1].split("&")[0];
            }

            newMovies.push({
                id: index++,
                title: data.title || data['عنوان'] || "بدون عنوان",
                year: data.year || data['سنة'] || "2024",
                rating: Number(data.supervisorRating || data['تقييم المشرف'] || 0),
                cat: data.genres || data['الأنواع'] || "عام",
                vid: ytId,
                desc: data.supervisorOpinion || data['رأي المشرف'] || data.synopsis || data['ملخص الفيلم'] || "",
                date: data.year || data['سنة'] || "2024",
                channel: "المشرف",
                bg: "linear-gradient(45deg, #19191F, #E50914)"
            });
        });

        if (newMovies.length > 0) {
            // نحدث قايمة الأفلام بتاعتنا
            window.MOVIES = newMovies;

            // السر كله هنا: بنجبر التطبيق يستخدم روابط اليوتيوب الحقيقية بدل الوهمية
            window.vids = function() {
                let allVids = [];
                window.MOVIES.forEach(m => {
                    allVids.push({
                        id: m.id + '-0',
                        mid: m.id, // ربط الفيديو بالفيلم
                        title: 'ملخص فيلم ' + m.title,
                        ch: m.channel,
                        date: m.date,
                        vid: m.vid // رقم اليوتيوب الحقيقي
                    });
                });
                return allVids;
            };

            if (typeof window.render === 'function') window.render();
            if (typeof window.go === 'function') window.go('home');
        }
    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
    }
}

window.addEventListener('load', loadMoviesFromFirebase);
