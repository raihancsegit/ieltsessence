/* ==========================================================================
   IELTS ESSENCE - Master JavaScript Engine & Animation Suite (v7.0)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Mobile Drawer Menu Toggle Logic
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
    const mobileDrawerCard = document.getElementById('mobile-drawer-card');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    function openMobileDrawer() {
        if (mobileDrawerOverlay && mobileDrawerCard) {
            mobileDrawerOverlay.classList.add('active');
            mobileDrawerCard.classList.add('active');
        }
    }

    function closeMobileDrawer() {
        if (mobileDrawerOverlay && mobileDrawerCard) {
            mobileDrawerOverlay.classList.remove('active');
            mobileDrawerCard.classList.remove('active');
        }
    }

    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', openMobileDrawer);
    }

    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    }

    if (mobileDrawerOverlay) {
        mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
    }

    // Mobile Drawer Accordion Submenu Toggles
    const accordionToggles = document.querySelectorAll('.mobile-accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggle.getAttribute('data-accordion-target');
            const content = targetId ? document.getElementById(targetId) : toggle.nextElementSibling;
            
            if (content) {
                const isOpen = content.classList.contains('open');
                
                // Close other accordions in the same menu
                document.querySelectorAll('.mobile-accordion-content').forEach(c => {
                    if (c !== content) c.classList.remove('open');
                });
                document.querySelectorAll('.mobile-accordion-toggle').forEach(t => {
                    if (t !== toggle) t.classList.remove('active');
                });

                if (isOpen) {
                    content.classList.remove('open');
                    toggle.classList.remove('active');
                } else {
                    content.classList.add('open');
                    toggle.classList.add('active');
                }
            }
        });
    });

    // Close drawer when clicking any standard link inside (excluding accordion toggle buttons)
    const drawerLinks = document.querySelectorAll('.mobile-drawer-card a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileDrawer();
        });
    });

    // 1. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-box-item');
    faqItems.forEach(item => {
        const titleBar = item.querySelector('.faq-title-bar');
        if (titleBar) {
            titleBar.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 2. WhatsApp Counselling Modal Flow
    const modal = document.getElementById('admission-modal');
    const closeBtn = document.querySelector('.btn-close-modal');
    const admissionForm = document.getElementById('admission-form');
    const courseSelect = document.getElementById('student-course');

    window.openCounsellingModal = function(courseName) {
        closeMobileDrawer();
        if (modal) {
            modal.classList.add('active');
            if (courseSelect && courseName) {
                for (let option of courseSelect.options) {
                    if (option.value.toLowerCase().includes(courseName.toLowerCase())) {
                        option.selected = true;
                        break;
                    }
                }
            }
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Form Submission to WhatsApp
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('student-name').value;
            const phone = document.getElementById('student-phone').value;
            const target = document.getElementById('student-target').value;
            const course = document.getElementById('student-course').value;

            triggerConfetti();

            const text = `Hi IELTS ESSENCE! I want to enroll/consult.%0A%0A👤 Name: ${encodeURIComponent(name)}%0A📞 Phone: ${encodeURIComponent(phone)}%0A🎯 Target Score: ${encodeURIComponent(target)}%0A📚 Course: ${encodeURIComponent(course)}`;
            
            setTimeout(() => {
                window.open(`https://wa.me/8801738474611?text=${text}`, '_blank');
                modal.classList.remove('active');
            }, 600);
        });
    }

    // 3. Band Score Calculator Widget Logic
    const calcListening = document.getElementById('calc-listening');
    const calcReading = document.getElementById('calc-reading');
    const calcWriting = document.getElementById('calc-writing');
    const calcSpeaking = document.getElementById('calc-speaking');
    const overallScoreDisplay = document.getElementById('calc-overall-score');
    const scoreRecommendation = document.getElementById('calc-recommendation');

    function calculateOverallBand() {
        if (!calcListening || !calcReading || !calcWriting || !calcSpeaking) return;

        const l = parseFloat(calcListening.value) || 0;
        const r = parseFloat(calcReading.value) || 0;
        const w = parseFloat(calcWriting.value) || 0;
        const s = parseFloat(calcSpeaking.value) || 0;

        const avg = (l + r + w + s) / 4;
        
        let rounded = Math.floor(avg);
        const remainder = avg - rounded;

        if (remainder >= 0.75) {
            rounded += 1.0;
        } else if (remainder >= 0.25) {
            rounded += 0.5;
        }

        if (overallScoreDisplay) {
            overallScoreDisplay.innerText = rounded.toFixed(1);
        }

        if (scoreRecommendation) {
            if (rounded >= 7.5) {
                scoreRecommendation.innerText = '🎯 Excellent! You are eligible for Ivy League & Top Global Universities.';
                triggerConfetti();
            } else if (rounded >= 6.5) {
                scoreRecommendation.innerText = '✅ Great Score! Perfect for UK, Canada & Australia University Admissions.';
            } else {
                scoreRecommendation.innerText = '🚀 Boost Your Score! Enroll in our Basic To Advanced Course to reach Band 7.5+';
            }
        }
    }

    [calcListening, calcReading, calcWriting, calcSpeaking].forEach(elem => {
        if (elem) {
            elem.addEventListener('change', calculateOverallBand);
        }
    });

    // 4. Live Batch Countdown Timer
    function startBatchCountdown() {
        const timerElem = document.getElementById('live-batch-timer');
        if (!timerElem) return;

        let totalSeconds = 3 * 86400 + 14 * 3600 + 22 * 60 + 45;

        setInterval(() => {
            totalSeconds--;
            if (totalSeconds < 0) totalSeconds = 3 * 86400;

            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            timerElem.innerText = `Batch Starts in: ${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
        }, 1000);
    }
    startBatchCountdown();

    // 5. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 6. Dynamic Animated Number Counters
    const counterElements = document.querySelectorAll('[data-counter-target]');
    if ('IntersectionObserver' in window && counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.getAttribute('data-counter-target'));
                    const isFloat = el.getAttribute('data-counter-float') === 'true';
                    const suffix = el.getAttribute('data-counter-suffix') || '';
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateNumber(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 4);
                        const currentVal = target * easeProgress;

                        el.innerText = (isFloat ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString()) + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(updateNumber);
                        } else {
                            el.innerText = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
                        }
                    }

                    requestAnimationFrame(updateNumber);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.2 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // 7. Inject Floating WhatsApp Quick Launcher & Back-To-Top Button
    if (!document.querySelector('.floating-widgets-container')) {
        const floatContainer = document.createElement('div');
        floatContainer.className = 'floating-widgets-container';
        floatContainer.innerHTML = `
            <button id="global-back-to-top" class="back-to-top-btn" aria-label="Back to top" title="Back to top">
                <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
            </button>
            <a href="https://wa.me/8801738474611" target="_blank" class="floating-whatsapp-btn" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
                <div class="beacon-ring"></div>
                <svg class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <div class="floating-whatsapp-tooltip">💬 Chat on WhatsApp (01738-474611)</div>
            </a>
        `;
        document.body.appendChild(floatContainer);

        const backToTopBtn = document.getElementById('global-back-to-top');
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }, { passive: true });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // 8. Live Admission Social Proof Toast Generator
    const admissionsData = [
        { name: "তানভীর আহমেদ", city: "চট্টগ্রাম", course: "Basic To Advanced (Band 8.0 Target)", time: "২ মিনিট আগে" },
        { name: "সাদিয়া ইসলাম", city: "ধানমন্ডি, ঢাকা", course: "Writing 7.5+ Masterclass", time: "৫ মিনিট আগে" },
        { name: "রাকিবুল হাসান", city: "সিলেট", course: "40-Day IELTS Crash Course", time: "১২ মিনিট আগে" },
        { name: "মেহেদী হাসান", city: "উত্তরা, ঢাকা", course: "Speaking Confidence Lab", time: "১৮ মিনিট আগে" },
        { name: "নুসরাত জাহান", city: "রাজশাহী", course: "1-on-1 VIP Mentorship", time: "২৫ মিনিট আগে" }
    ];

    let toastContainer = document.querySelector('.admission-toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'admission-toast-container';
        document.body.appendChild(toastContainer);
    }

    let toastIndex = 0;
    function showNextAdmissionToast() {
        const item = admissionsData[toastIndex % admissionsData.length];
        toastIndex++;

        const toast = document.createElement('div');
        toast.className = 'admission-toast-card';
        toast.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-base flex-shrink-0">
                🎓
            </div>
            <div class="text-xs">
                <div class="font-extrabold text-secondary flex items-center gap-1.5">
                    <span>${item.name} (${item.city})</span>
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <div class="text-rose-600 font-semibold text-[11px]">${item.course}</div>
                <div class="text-[10px] text-slate-400 font-medium">ভর্তি নিশ্চিত হয়েছে • ${item.time}</div>
            </div>
        `;

        toastContainer.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 5000);
    }

    // Trigger toast periodically
    setTimeout(() => {
        showNextAdmissionToast();
        setInterval(showNextAdmissionToast, 16000);
    }, 4000);

    // 9. Confetti Celebration Burst Function
    window.triggerConfetti = function() {
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            if (typeof confetti === 'function') {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }
        }

        if (typeof confetti === 'function') {
            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });
        }
    };

    // 10. Interactive Speaking Audio Player Demo
    window.toggleSpeakingAudio = function(btn, type) {
        const card = btn.closest('.speaking-audio-card');
        const isPlaying = card.classList.contains('playing');
        
        document.querySelectorAll('.speaking-audio-card').forEach(c => {
            c.classList.remove('playing');
            const playBtn = c.querySelector('.audio-play-icon');
            if (playBtn) playBtn.innerHTML = '▶';
        });

        const icon = btn.querySelector('.audio-play-icon');
        if (!isPlaying) {
            card.classList.add('playing');
            if (icon) icon.innerHTML = '⏸';
        } else {
            card.classList.remove('playing');
            if (icon) icon.innerHTML = '▶';
        }
    };

    // 11. Interactive Video Testimonial Modal Engine
    window.openSuccessVideoModal = function(title, videoEmbedUrl, studentDetails) {
        let modal = document.getElementById('success-video-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'success-video-modal';
            modal.className = 'video-modal-wrapper';
            modal.innerHTML = `
                <div class="video-modal-box">
                    <div class="flex items-center justify-between p-4 px-6 bg-slate-900 border-b border-white/10">
                        <div>
                            <h4 id="video-modal-title" class="text-white font-extrabold text-sm sm:text-base font-heading">Student Success Interview</h4>
                            <p id="video-modal-subtitle" class="text-[11px] text-slate-400">IELTS ESSENCE Success Series</p>
                        </div>
                        <button onclick="closeSuccessVideoModal()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center font-bold text-lg transition-all">&times;</button>
                    </div>
                    <div class="aspect-video w-full bg-black relative">
                        <iframe id="video-modal-iframe" class="w-full h-full" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="p-4 px-6 bg-slate-950 flex items-center justify-between">
                        <div class="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                            <span>✅ Verified Band Score</span>
                        </div>
                        <button onclick="closeSuccessVideoModal()" class="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-all">Close</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeSuccessVideoModal();
            });
        }

        const titleElem = document.getElementById('video-modal-title');
        const subElem = document.getElementById('video-modal-subtitle');
        const iframe = document.getElementById('video-modal-iframe');

        if (titleElem) titleElem.innerText = title;
        if (subElem) subElem.innerText = studentDetails || 'IELTS ESSENCE Student Journey';
        if (iframe) iframe.src = videoEmbedUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeSuccessVideoModal = function() {
        const modal = document.getElementById('success-video-modal');
        if (modal) {
            modal.classList.remove('active');
            const iframe = document.getElementById('video-modal-iframe');
            if (iframe) iframe.src = '';
            document.body.style.overflow = '';
        }
    };

    // 12. Exam Results Filter Tabs Engine
    window.filterExamResults = function(category, btn) {
        const buttons = document.querySelectorAll('.exam-tab-btn');
        buttons.forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const rows = document.querySelectorAll('.exam-result-item');
        rows.forEach(row => {
            const rowCat = row.getAttribute('data-exam-type');
            if (category === 'all' || rowCat === category) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    };
});

