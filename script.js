const quotes = [
    {
        ar: "الجودة مش صدفة، دي نتيجة إصرار واهتمام بالتفاصيل.",
        en: "Quality isn’t luck — it’s the result of persistence and attention to detail."
    },
    {
        ar: "الجودة بتبدأ من طريقة تفكيرك قبل ما تبدأ شغلك",
        en: "Quality starts with how you think before you start your work."
    },
    {
        ar: "كل تفصيلة صغيرة ممكن تفرق بين العادي والممتاز",
        en: "Every small detail can be the difference between average and excellent."
    },
    {
        ar: "خليك فخور بشغلك كأنه بيحمل اسمك... لأنه فعلاً كده",
        en: "Be proud of your work as if it carries your name — because it does."
    },
    {
        ar: "إيد لوحدها ما تسقفش، لكن مع بعض بنعمل إنجاز",
        en: "One hand can’t clap — but together, we achieve greatness."
    },
    {
        ar: "الفريق القوي هو اللي كل فرد فيه شايف نجاح التاني نجاح ليه",
        en: "A strong team sees each other’s success as their own."
    },
    {
        ar: "كل واحد في الفريق ليه دور، وكل دور مهم في الصورة الكبيرة",
        en: "Every team member has a role, and every role matters in the big picture."
    },
    {
        ar: "لما نشتغل بروح واحدة، مافيش حاجة توقفنا",
        en: "When we work with one spirit, nothing can stop us."
    },
    {
        ar: "النجاح مش خطوة واحدة، ده مشوار من محاولات وتعلّم",
        en: "Success isn’t one step — it’s a journey of trying and learning."
    },
    {
        ar: "مفيش طريق مختصر للنجاح، بس كل خطوة بتقرّبك منه",
        en: "There’s no shortcut to success, but every step gets you closer."
    },
    {
        ar: "خليك مؤمن إن التعب دايمًا ليه نتيجة.",
        en: "Believe that hard work always pays off."
    },
    {
        ar: "النجاح الحقيقي لما تفرح بنجاح غيرك كأنه نجاحك",
        en: "True success is celebrating others’ success as if it’s your own"
    },
    {
        ar: "ابدأ بخطوة صغيرة، بس بخطة كبيرة",
        en: "Start with a small step, but a big plan."
    },
    {
        ar: "كل يوم فرصة جديدة تثبت لنفسك إنك تقدر",
        en: "Every day is a new chance to prove to yourself that you can."
    },
    {
        ar: "لما تفكر بإيجابية، بتخلق طاقة بتغيّر الواقع",
        en: "When you think positively, you create energy that changes reality."
    },
    {
        ar: "حتى لو النهاردة صعب، بكرة ممكن يكون أحسن",
        en: "Even if today is tough, tomorrow can be better."
    },
    {
        ar: "التحديات معمولة علشان تكتشف قوتك",
        en: "Challenges exist to help you discover your strength."
    },
    {
        ar: "ابتسم، يمكن تكون سبب طاقة حلوة في يوم حد غيرك.",
        en: "Smile — you might be the reason someone else’s day gets better."
    },
    {
        ar: "كل إنجاز كبير بدأ بفكرة صغيرة وإصرار كبير",
        en: "Every great achievement started with a small idea and big determination."
    },
    {
        ar: "الجودة مش إنك تعمل كتير، الجودة إنك تعمل الصح",
        en: "Quality isn’t about doing more — it’s about doing it right."
    },
    {
        ar: "الفريق اللي بيسند بعض، يوصل أبعد من اللي بيتسابق",
        en: "A team that supports each other goes farther than one that competes."
    }
];

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const wheelContainer = document.querySelector('.wheel-container');
const modal = document.getElementById('resultModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeSpan = document.querySelector('.close-btn');
const quoteAr = document.getElementById('quoteAr');
const quoteEn = document.getElementById('quoteEn');

let startAngle = 0;
const arc = Math.PI * 2 / quotes.length;
let spinTimeout = null;
let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;
let isSpinning = false;

const colors = [];
// Group 21 quotes into 3 visual segments (7 quotes per color)
for (let i = 0; i < 7; i++) colors.push('#F7C100'); // Yellow
for (let i = 0; i < 7; i++) colors.push('#007DB6'); // Medium Blue
for (let i = 0; i < 7; i++) colors.push('#102649'); // Dark Blue

function drawRouletteWheel() {
    const outsideRadius = 220;
    const textRadius = 160;
    const insideRadius = 40;

    ctx.clearRect(0, 0, 500, 500);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;

    ctx.font = 'bold 16px Outfit';

    for (let i = 0; i < quotes.length; i++) {
        const angle = startAngle + i * arc;

        // Fill Segment
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();
    }

    // Draw Center "SPIN" Hub
    ctx.beginPath();
    ctx.arc(250, 250, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#102649'; // Dark Blue center
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#F7C100'; // Yellow border
    ctx.stroke();

    ctx.font = 'bold 24px Outfit';
    ctx.fillStyle = '#F7C100'; // Yellow text
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SPIN", 250, 250);
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = requestAnimationFrame(rotateWheel);
}

function stopRotateWheel() {
    cancelAnimationFrame(spinTimeout);
    isSpinning = false;

    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);

    showResult(index);
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

function spin() {
    if (isSpinning) return;
    isSpinning = true;
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000;
    rotateWheel();
}

function showResult(index) {
    // Handle edge case where index might be out of bounds due to rounding
    if (index >= quotes.length) index = 0;

    const quote = quotes[index];
    quoteAr.textContent = quote.ar;
    quoteEn.textContent = quote.en;

    // Small delay before showing modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);
}

function closeModal() {
    modal.classList.remove('show');
}

// Event Listeners
// Event Listeners
wheelContainer.addEventListener('click', spin); // Click on wheel to spin

closeModalBtn.addEventListener('click', closeModal);
closeSpan.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Initial Draw
drawRouletteWheel();
