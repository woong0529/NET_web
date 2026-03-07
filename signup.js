import firebaseConfig from "./api_key.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('do-signup').addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await auth.signOut();
        alert("회원가입이 완료되었습니다! 창을 닫고 로그인을 진행해주세요.");
        window.close(); // 가입 성공 시 팝업창 닫기
    } catch (error) {
        document.getElementById('msg').innerText = "실패: " + error.message;
    }
});
