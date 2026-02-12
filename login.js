import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. Firebase 설정 (Firebase Console에서 복사해오세요!)
const firebaseConfig = {
    apiKey: "AIzaSyBwTnNv2wsZ65ZMFlwqksIWsymtIlfQoPE",
    authDomain: "net-login-7c68a.firebaseapp.com",
    projectId: "net-login-7c68a",
    storageBucket: "net-login-7c68a.firebasestorage.app",
    messagingSenderId: "53195102418",
    appId: "1:53195102418:web:513dcde61a59895047350b"
};

// 2. Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. 로그인 상태 감시 (Session 관리)
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("로그인 상태:", user.email);
        // 로그인 성공 시 자료실 페이지로 리다이렉트 하거나 화면 전환
        window.location.href = "main.html"; 
    } else {
        console.log("로그아웃 상태");
    }
});

// 4. 로그인 함수
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("환영합니다, " + userCredential.user.email + "님!");
    } catch (error) {
        document.getElementById('message').innerText = "에러: " + error.message;
    }
});

