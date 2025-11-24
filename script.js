// Menu Toggle
const navToggle = document.getElementById("navToggle")
const menu = document.getElementById("menu")

navToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open")
  navToggle.setAttribute("aria-expanded", isOpen)
  document.body.classList.toggle("menu-open", isOpen)
})

// Fechar menu ao clicar em um link
const navLinks = menu.querySelectorAll("a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.classList.remove("menu-open")
  })
})

// Modals
const loginModal = document.getElementById("loginModal")
const accountTypeModal = document.getElementById("accountTypeModal")
const signupModal = document.getElementById("signupModal")

// Botões para abrir modais
const btnLogin = document.getElementById("btnLogin")
const btnHeroLogin = document.getElementById("btnHeroLogin")
const btnSignup = document.getElementById("btnSignup")
const btnHeroSignup = document.getElementById("btnHeroSignup")

// Botões para fechar modais
const closeLogin = document.getElementById("closeLogin")
const closeAccountType = document.getElementById("closeAccountType")
const closeSignup = document.getElementById("closeSignup")

// Links entre modais
const linkToSignup = document.getElementById("linkToSignup")
const linkToLogin = document.getElementById("linkToLogin")

// Botões de tipo de conta
const accountTypeBtns = document.querySelectorAll(".account-type-btn")

// Abrir modal de login
btnLogin.addEventListener("click", () => {
  loginModal.classList.add("active")
})

btnHeroLogin.addEventListener("click", () => {
  loginModal.classList.add("active")
})

// Abrir modal de tipo de conta
btnSignup.addEventListener("click", () => {
  accountTypeModal.classList.add("active")
})

btnHeroSignup.addEventListener("click", () => {
  accountTypeModal.classList.add("active")
})

// Fechar modais
closeLogin.addEventListener("click", () => {
  loginModal.classList.remove("active")
})

closeAccountType.addEventListener("click", () => {
  accountTypeModal.classList.remove("active")
})

closeSignup.addEventListener("click", () => {
  signupModal.classList.remove("active")
})

// Fechar modal ao clicar fora
loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("active")
  }
})

accountTypeModal.addEventListener("click", (e) => {
  if (e.target === accountTypeModal) {
    accountTypeModal.classList.remove("active")
  }
})

signupModal.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.classList.remove("active")
  }
})

// Navegar entre modais
linkToSignup.addEventListener("click", (e) => {
  e.preventDefault()
  loginModal.classList.remove("active")
  accountTypeModal.classList.add("active")
})

linkToLogin.addEventListener("click", (e) => {
  e.preventDefault()
  signupModal.classList.remove("active")
  loginModal.classList.add("active")
})

// Selecionar tipo de conta
accountTypeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute('data-type') || 'aluno'
    const role = type === 'categoria' ? 'professor' : type
    localStorage.setItem('userRole', role)
    accountTypeModal.classList.remove("active")
    signupModal.classList.add("active")
  })
})

// Cadastro
const signupForm = document.querySelector('#signupModal .modal-form')
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('signup-name')?.value?.trim() || 'Usuário'
    const email = document.getElementById('signup-email')?.value?.trim() || ''
    const estado = document.getElementById('signup-estado')?.value?.trim() || ''
    const telefone = document.getElementById('signup-telefone')?.value?.trim() || ''
    localStorage.setItem('userName', name)
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userEstado', estado)
    localStorage.setItem('userTelefone', telefone)
    const seed = encodeURIComponent(name.split(' ')[0] || 'User')
    localStorage.setItem('userAvatarUrl', `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`)
    signupModal.classList.remove('active')
    loginModal.classList.add('active')
    alert('Cadastro criado com sucesso! Faça login para continuar.')
  })
}
// Carrossel de depoimentos
const testimonialTrack = document.getElementById("testimonialTrack")
const btnPrev = document.getElementById("btnPrev")
const btnNext = document.getElementById("btnNext")

let currentIndex = 0
const totalTestimonials = 3

function updateCarousel() {
  const translateX = -currentIndex * (100 / totalTestimonials)
  testimonialTrack.style.transform = `translateX(${translateX}%)`
}

btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalTestimonials
  updateCarousel()
})

btnPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials
  updateCarousel()
})

// Prevenir envio de formulários (para demonstração)


// -------------------------
// LÓGICA DO LOGIN FAKE
// -------------------------
const loginForm = document.querySelector("#loginModal .modal-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Preencha todos os campos.");
            return;
        }

        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("showWelcomeModal", "true");
        const role = localStorage.getItem('userRole') || 'aluno'
        if (role === 'professor') {
          window.location.href = 'professor.html'
        } else {
          window.location.href = 'inicio.html'
        }
    });
}
