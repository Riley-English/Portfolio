gsap.registerPlugin(Flip, SplitText)

//Opening/Hero Animation
let introTimeline = gsap.timeline();
var splitHeroRiley = new SplitText("#heroRiley");
var splitHeroEnglish = new SplitText("#heroEnglish");
introTimeline.fromTo("#heroRiley",{rotation: -100, transformOrigin: "20% 100%", opacity: 0},{rotation: 0, opacity: 1, duration: 0.8, ease: "power3"});
introTimeline.fromTo("#heroEnglish",{rotation: -100, transformOrigin: "90% 0%", opacity: 0},{rotation: 0, opacity: 1, duration: 1, ease: "power3"});
introTimeline.to(splitHeroRiley.chars, {x: ((-200-window.innerWidth)/2)+(document.getElementById('heroRiley').offsetWidth/2), yPercent: -100, stagger: -0.05, duration: 1});
introTimeline.to(splitHeroEnglish.chars, {x: ((window.innerWidth)/2)-(document.getElementById('heroEnglish').offsetWidth/2), yPercent: 100, stagger: -0.05, duration: 1}, "<");

