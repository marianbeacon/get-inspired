const quotes = [
    {
        ar: "لما تساعد غيرك ينجح، نجاحك بيكبر معاه",
        en: "When you help others succeed, your success grows with theirs."
    },
    {
        ar: "أحيانًا أبسط مساعدة منك ممكن تغيّر يوم كامل لشخص تاني",
        en: "Sometimes the simplest help can change someone's entire day."
    },
    {
        ar: "القيمة الحقيقية تظهر لما تستخدم خبرتك لخدمة الآخرين",
        en: "True value appears when you use your expertise to help others."
    },
    {
        ar: "النجاح مش حظ النجاح عادة بتتبني كل يوم",
        en: "Success isn't luck — it's a habit built every day."
    },
    {
        ar: "كل إنجاز كبير كان في يوم من الأيام مجرد هدف مكتوب",
        en: "Every great achievement was once just a written goal."
    },
    {
        ar: "الاستمرار وقت الصعوبة هو اللي بيصنع الفرق الحقيقي",
        en: "Persistence during difficult times creates real success."
    },
    {
        ar: "السعادة مش دايمًا في الوصول، أحيانًا في الرحلة نفسها",
        en: "Happiness isn't always in the destination — sometimes it's in the journey."
    },
    {
        ar: "خلي الامتنان جزء من يومك، هتلاقي أسباب السعادة حواليك",
        en: "Make gratitude part of your day and you'll find happiness everywhere."
    },
    {
        ar: "الابتسامة البسيطة ممكن تفتح أبواب أكتر مما تتخيل",
        en: "A simple smile can open more doors than you imagine."
    },
    {
        ar: "النجاح الحقيقي إنك تبني حياة تحبها، مش بس وظيفة تنجح فيها",
        en: "True success is building a life you love, not just a career."
    },
    {
        ar: "الراحة مش رفاهية... الراحة جزء من الإنتاجية",
        en: "Rest isn't a luxury — it's part of productivity."
    },
    {
        ar: "خصص وقت لنفسك بنفس الجدية اللي بتخصص بيها وقت لشغلك",
        en: "Schedule time for yourself with the same commitment as your work."
    },
    {
        ar: "كلمة تشجيع في الوقت المناسب ممكن تصنع فرق كبير",
        en: "The right encouragement at the right time can make a huge difference."
    },
    {
        ar: "الدعم الحقيقي هو إنك تؤمن بحد حتى قبل ما هو يؤمن بنفسه",
        en: "Real support is believing in someone before they believe in themselves."
    },
    {
        ar: "القوة بتكبر لما نشاركها مع بعض",
        en: "Strength grows when we share it with others."
    },
    {
        ar: "الأفكار العظيمة تكبر لما تتشارك",
        en: "Great ideas grow when they are shared."
    },
    {
        ar: "التعاون بيحول التحديات لفرص",
        en: "Collaboration turns challenges into opportunities."
    },
    {
        ar: "أفضل الحلول غالبًا بتطلع من عقول بتفكر مع بعض",
        en: "The best solutions often come from minds working together."
    },
    {
        ar: "كل علاقة مهنية جديدة هي فرصة جديدة للتعلم والنمو",
        en: "Every professional connection is a new opportunity to learn and grow."
    },
    {
        ar: "ابني علاقات قبل ما تحتاجها",
        en: "Build relationships before you need them."
    },
    {
        ar: "الشبكات القوية بتتبني بالثقة مش بعدد المعارف",
        en: "Strong networks are built on trust, not numbers."
    },
    {
        ar: "استثمر في نفسك... ده الاستثمار الوحيد اللي بيزيد قيمته مع الوقت",
        en: "Invest in yourself — it's the one investment that grows forever."
    },
    {
        ar: "كل مهارة جديدة بتضيف فرصة جديدة لمستقبلك",
        en: "Every new skill adds a new opportunity to your future."
    },
    {
        ar: "التطوير المستمر مش اختيار، ده أسلوب نجاح",
        en: "Continuous growth isn't an option — it's a success mindset."
    },
    {
        ar: "أحلامك تستحق إنك تديها فرصة تتحقق",
        en: "Your dreams deserve a chance to become reality."
    },
    {
        ar: "الحلم بيبدأ فكرة، والإنجاز بيبدأ خطوة",
        en: "Dreams start as ideas, achievements start with action."
    },
    {
        ar: "متخليش حجم الحلم يخوفك من البداية",
        en: "Don't let the size of the dream stop you from starting."
    },
    {
        ar: "الجودة هي لما تعمل الصح حتى لو محدش شايفك",
        en: "Quality is doing the right thing even when no one is watching."
    },
    {
        ar: "كل تفصيلة محسوبة بتضيف قيمة للنتيجة النهائية",
        en: "Every thoughtful detail adds value to the final result."
    },
    {
        ar: "الجودة عادة يومية قبل ما تكون نتيجة نهائية",
        en: "Quality is a daily habit before it's a final outcome."
    },
    {
        ar: "كلمة حلوة ممكن تغيّر يوم حد من غير ما تاخد منك حاجة.",
        en: "A kind word can change someone's day without costing you anything."
    },
    {
        ar: "خليك الشخص اللي وجوده بيخلّي المكان أحلى.",
        en: "Be the person who makes every place a little better."
    },
    {
        ar: "اسمع، ساعد، شارك… الفريق الحلو بيتبني بالحاجات دي",
        en: "Listen, help, share — that's how great teams are built."
    },
    {
        ar: "مش كل حاجة محتاجة منافسة… ساعات التعاون هو المكسب الحقيقي",
        en: "Not everything needs to be a competition — sometimes collaboration is the real win."
    },
    {
        ar: "اعمل حاجة صغيرة حلوة النهارده… يمكن تفرق مع حد جدًا",
        en: "Do one small good thing today — it might mean a lot to someone."
    },
    {
        ar: "خد وقتك، اتعلم، وارجع أقوى",
        en: "Take your time, learn, and come back stronger."
    },
    {
        ar: "الإنجاز بيبدأ لما تقول: يلا نجرب",
        en: "Progress begins when you say, \"Let's give it a try.\""
    },
    {
        ar: "لو الدنيا زنقت… خد نفس، اشرب قهوتك، ونكمّل. ☕😄",
        en: "When things get tough… take a breath, grab your coffee, and keep going. ☕😄"
    },
    {
        ar: "خلي نجاحك يفتح باب لحد تاني، مش يقفل الباب وراك.",
        en: "Let your success open a door for someone else, not close one behind you."
    },
    {
        ar: "ضحكة حلوة، كلمة حلوة، ومساعدة صغيرة… يومك ممكن يتغير",
        en: "A good laugh, a kind word, and a little help can change your whole day."
    },
    {
        ar: "الناس الحلوة بتخلّي حتى الأيام التقيلة أخف",
        en: "Good people make even the hardest days feel lighter."
    },
    {
        ar: "اشتغل بجد، اضحك أكتر، وسيب أثر حلو",
        en: "Work hard, laugh more, and leave a positive impact."
    },
    {
        ar: "النجاح بيكون أحلى لما نحققه سوا.",
        en: "Success is better when we achieve it together."
    },
    {
        ar: "مش لازم كل يوم يكون مثالي… المهم نفضل نتقدم.",
        en: "Every day doesn't have to be perfect — what matters is moving forward."
    },
    {
        ar: "النجاح الحقيقي لما يكون ليه أثر حلو على اللي حواليك.",
        en: "True success is the positive impact you have on others."
    },
    {
        ar: "كل واحد في الفريق بيضيف حاجة مختلفة… وده سر قوتنا.",
        en: "Everyone brings something different to the team — that's our strength."
    },
    {
        ar: "التعاون مش بس بيوصلنا أسرع، بيخلّي الطريق أحسن.",
        en: "Collaboration doesn't just get us there faster — it makes the journey better."
    },
    {
        ar: "اتعلم من كل تجربة، وخلي كل خطوة تقربك أكتر.",
        en: "Learn from every experience and let every step take you further."
    },
    {
        ar: "لو اليوم كان طويل… خليه ينتهي بإنجاز صغير.",
        en: "If it's been a long day, end it with one small win."
    },
    {
        ar: "مش كل تحدي محتاج حل سريع… ساعات محتاج هدوء وتركيز.",
        en: "Not every challenge needs a quick solution — sometimes it needs calm and focus."
    },
    {
        ar: "خد وقتك، رتّب أفكارك، وابدأ من جديد.",
        en: "Take a moment, clear your thoughts, and start again."
    },
    {
        ar: "مش مهم مين ياخد الـcredit… المهم إن الفريق يوصل.",
        en: "It's not about who gets the credit — it's about the team getting there."
    },
    {
        ar: "يوم صعب؟ عادي… بكرة فرصة جديدة.",
        en: "Tough day? That's okay — tomorrow is a new opportunity."
    },
    {
        ar: "يوم صعب؟ عادي… الحياة صعبة 😂",
        en: "Tough day? It's okay… life is tough. 😂"
    },
    {
        ar: "مفيش مشكلة كبيرة… لحد ما نفتح الـemail. 😂",
        en: "It's not a big problem… until we open the email. 😂"
    },
    {
        ar: "القهوة مش هتحل المشكلة… بس خلينا نشربها الأول ونشوف ☕😂",
        en: "Coffee won't solve the problem… but let's have some first and see. ☕😂"
    },
    {
        ar: "في حاجات محتاجة meeting… وفي حاجات محتاجة قهوة بس. ☕",
        en: "Some things need a meeting… some things just need coffee. ☕"
    },
    {
        ar: "خلصنا كل الـtasks؟ أكيد في حاجة نسيناها. 😂",
        en: "Finished all the tasks? We definitely forgot something. 😂"
    },
    {
        ar: "كل تأخيرة وفيها خيرة… أو كوباية قهوة. ☕😂",
        en: "Every delay has a silver lining… or at least a cup of coffee. ☕😂"
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
let lastSegmentIndex = -1; // Track the last segment crossed

const colors = [];
const quotesPerColor = Math.ceil(quotes.length / 3);
for (let i = 0; i < quotes.length; i++) {
    if (i < quotesPerColor) {
        colors.push('#F7C100'); // Yellow
    } else if (i < quotesPerColor * 2) {
        colors.push('#007DB6'); // Medium Blue
    } else {
        colors.push('#102649'); // Dark Blue
    }
}

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

    // Check if we crossed a segment boundary
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const currentSegmentIndex = Math.floor((360 - degrees % 360) / arcd);

    // Removed audio feedback - keeping only visual animations
    lastSegmentIndex = currentSegmentIndex;

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

    // Reset segment tracking
    lastSegmentIndex = -1;

    rotateWheel();
}

function showResult(index) {
    // Handle edge case where index might be out of bounds due to rounding
    if (index >= quotes.length) index = 0;

    const quote = quotes[index];
    quoteAr.textContent = quote.ar;
    quoteEn.textContent = quote.en;

    // Trigger confetti burst
    triggerConfetti();

    // Small delay before showing modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);
}

function triggerConfetti() {
    // Custom confetti with Beacon brand colors
    const beaconColors = ['#F7C100', '#007DB6', '#102649'];

    // Main burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: beaconColors,
        shapes: ['circle', 'square'],
        gravity: 1.2,
        scalar: 1.2
    });

    // Additional bursts
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: beaconColors,
            gravity: 1.0,
            scalar: 0.8
        });
    }, 150);

    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: beaconColors,
            gravity: 1.0,
            scalar: 0.8
        });
    }, 300);
}

function closeModal() {
    modal.classList.remove('show');
}

// Event Listeners
wheelContainer.addEventListener('click', spin);

closeModalBtn.addEventListener('click', closeModal);
closeSpan.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Initial Draw
drawRouletteWheel();
