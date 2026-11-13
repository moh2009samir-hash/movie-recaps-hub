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

            // بنخلي التطبيق يفتكر إن فيه فيديوهات مرتبطة بالفيلم ده
            let videoArray = [{
                vid: ytId, 
                c_name: "المشرف", 
                v_title: "ملخص الفيلم"
            }];

            newMovies.push({
                id: index++,
                title: data.title || data['عنوان'] || "بدون عنوان",
                year: data.year || data['سنة'] || "2024",
                rating: Number(data.supervisorRating || data['تقييم المشرف'] || 0),
                cat: data.genres || data['الأنواع'] || "عام",
                vid: ytId,
                vids: videoArray, // السطر ده اللي هيخلي زرار التشغيل يشتغل
                desc: data.supervisorOpinion || data['رأي المشرف'] || data.synopsis || data['ملخص الفيلم'] || "",
                date: data.year || data['سنة'] || "2024",
                channel: "المشرف",
                bg: "linear-gradient(45deg, #19191F, #E50914)"
            });
        });

        if (newMovies.length > 0) {
            if (typeof window.MOVIES !== 'undefined') {
                window.MOVIES.length = 0; 
                window.MOVIES.push(...newMovies); 
            }
            if (typeof window.render === 'function') window.render();
            if (typeof window.go === 'function') window.go('home');
            
            // السطور دي عشان نرغم التطبيق يعرض مشغل اليوتيوب بدل الشاشة السودة
            setTimeout(() => {
                const playerDiv = document.getElementById('player-area') || document.querySelector('.video-container') || document.querySelector('.player');
                if(playerDiv && !playerDiv.innerHTML.includes('iframe')) {
                    const currentMovieId = window.S?.sel || 1;
                    const currentMovie = newMovies.find(m => m.id == currentMovieId);
                    if(currentMovie && currentMovie.vid) {
                        playerDiv.innerHTML = `
                            <iframe width="100%" height="100%" 
                                src="https://www.youtube.com/embed/${currentMovie.vid}?autoplay=1" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen style="border-radius: 8px; min-height: 250px;">
                            </iframe>`;
                    }
                }
            }, 1000);
        }
    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
    }
}

window.addEventListener('load', loadMoviesFromFirebase);
