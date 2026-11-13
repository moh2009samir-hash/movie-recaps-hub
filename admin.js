import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// مفاتيح الخزانة بتاعتك
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

// دالة الحفظ
window.saveMovie = async function() {
    const title = document.getElementById('movieTitle').value;
    const year = document.getElementById('movieYear').value;
    const director = document.getElementById('movieDirector').value;
    const genres = document.getElementById('movieGenres').value;
    const synopsis = document.getElementById('movieSynopsis').value;
    const opinion = document.getElementById('supervisorOpinion').value;
    const rating = document.getElementById('supervisorRating').value;
    const youtubeLink = document.getElementById('youtubeLink').value;

    if(!title || !opinion) {
        alert("يا هندسة، لازم تكتب اسم الفيلم ورأيك على الأقل!");
        return;
    }

    try {
        await addDoc(collection(db, "movies"), {
            title: title,
            year: year,
            director: director,
            genres: genres,
            synopsis: synopsis,
            supervisorOpinion: opinion,
            supervisorRating: Number(rating),
            youtubeLink: youtubeLink,
            createdAt: new Date()
        });
        
        alert("تم حفظ الفيلم بنجاح! 🎉");
        
        // تفريغ الخانات بعد الحفظ
        document.querySelectorAll('.admin-container input, .admin-container textarea').forEach(el => el.value = '');
        
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("حدث خطأ أثناء الحفظ. تأكد من إنك في وضع الاختبار (Test Mode) في Firebase.");
    }
}
