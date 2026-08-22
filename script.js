
// ---- 2. Timeline: the full run of show ------------------------------------
const TIMELINE = [
  { time:"10:00 AM - 11:00 AM", title:"Arrival & Registration", desc:"Check in, scan the event QR code, and connect with fellow attendees.", host:"Regenerates Team" },
  { time:"11:00 AM - 11:05 AM", title:"Opening Prayer", desc:"A short prayer session to open the day right.", host:"" },
  { time:"11:05 AM - 11:15 AM", title:"Welcome Address", desc:"Welcome to RegenCon Abuja 2026 and an introduction to the vision behind the convention", host:"Bernard" },
  { time:"11:15 AM - 11:25 PM", title:"Opening & Room Warm-up", desc:"Meet the room, connect with fellow attendees, and get ready for the day.", host:"" },
  { time:"11:25 PM - 11:45 PM", title:"Building With What You Have: Leveraging Your Skills in Web3 & the Digital Economy", desc:"", host:"Cryptonaut" },
  { time:"11:45 PM - 11:50 AM", title:"Interlude, Next Speaker Intro", desc:"", host:"" },
  { time:"11:50 AM - 12:10 PM", title:"Built to thrive: Finding Opportunity, Building a Career & Staying Relevant in Web3", desc:"S.", host:"Ohjay" },
  { time:"12:10 PM - 12:15 PM", title:"Interlude, Quips & Next Speaker Intro", desc:"", host:"" },
  { time:"12:15 PM - 12:40 PM", title:"Building by the wisdom of God: A different way to build", desc:"", host:"Jay CW3 UK" },
  { time:"12:40 PM - 12:55PM", title:"Audience Connection", desc:"", host:"" },
  { time:"12:55 PM - 1:15 PM", title:"Built to Last: What Building Multiple Products in Web2 Taught Me About Real Value", desc:"", host:"Mr Emmanuel Onuoha"},
  { time:"12:15 PM - 12:40 PM", title:"Building by the wisdom of God: A different way to build", desc:"", host:"Jay CW3 UK" },
  { time:"12:40 PM - 12:55PM", title:"Audience Connection", desc:"", host:"" },
  { time:"12:55 PM - 1:15 PM", title:"Built to Last: What Building Multiple Products in Web2 Taught Me About Real Value", desc:"", host:"Mr Emmanuel Onuoha"},6
  
];




// ---- 6. Social links ---------------------------------------------------------
const SOCIALS = [
  { name:"X / Twitter", handle:"@regener8s", url:"https://x.com/regener8s", icon:"x" },
  { name:"Instagram", handle:"@theregener8s", url:"https://instagram.com/theregener8s", icon:"instagram" },
  { name:"TikTok", handle:"@regener8s", url:"https://tiktok.com/@regener8s", icon:"tiktok" },
  { name:"YouTube", handle:"@theregener8s", url:"https://youtube.com/@theregener8s", icon:"youtube" },
];


const WEB3FORMS_ACCESS_KEY = "6559a43c-8303-4578-9261-05e5ccf06ece"; 
const RECIPIENT_EMAIL_NOTE = "regeneratesdao@gmail.com"; 


const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz56_ixnzyVVJ6yqPVV7PnxiPqAvDujAtITOzPSNlmZyhLRxSv6RgqKlG2f1VC9U-SUUA/exec"; 


/* =========================================================================
   RENDERING
   ========================================================================= */
function el(tag, className, html){
  const e = document.createElement(tag);
  if(className) e.className = className;
  if(html !== undefined) e.innerHTML = html;
  return e;
}

// Timeline
const timelineList = document.getElementById('timelineList');
TIMELINE.forEach(t=>{
  const item = el('div','timeline-item reveal');
  item.innerHTML = `
    <div class="timeline-time">${t.time}</div>
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="tt-mobile-time">${t.time}</div>
      <h4>${t.title}</h4>
      <p>${t.desc}</p>
      ${t.host ? `<span class="timeline-host">— ${t.host}</span>` : ``}
    </div>`;
  timelineList.appendChild(item);
});

// Socials
const ICONS = {
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.4 22H1.3l8.2-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 3v10.6a2.9 2.9 0 1 1-2.4-2.85V8.2A5.4 5.4 0 1 0 16.4 13V8.9a6.7 6.7 0 0 0 4.1 1.4V7.7A4 4 0 0 1 17 3.9V3h-3Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none"/></svg>`,
};
const socialLinks = document.getElementById('socialLinks');
SOCIALS.forEach(s=>{
  const a = el('a','social-link');
  a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
  a.innerHTML = `${ICONS[s.icon] || ''}<span>${s.name} · ${s.handle}</span>`;
  socialLinks.appendChild(a);
});

document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================================
   NAV — mobile menu
   ========================================================================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
mobileMenu.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded','false');
  });
});

/* =========================================================================
   UPLOAD FORM
/* =========================================================================
   UPLOAD FORM
   ========================================================================= */
const uploadForm = document.getElementById('uploadForm');
const fileDrop = document.getElementById('fileDrop');
const fileInput = document.getElementById('fphoto');
const filePreview = document.getElementById('filePreview');
const filePreviewImg = document.getElementById('filePreviewImg');
const filePreviewName = document.getElementById('filePreviewName');
const fileError = document.getElementById('fileError');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

const ALLOWED_TYPES = ['image/jpeg','image/jpg','image/png','image/webp'];
const MAX_SIZE_MB = 8;

function validateFile(file){
  if(!file) return "Please choose a photo to upload.";
  if(!ALLOWED_TYPES.includes(file.type)) return "Please upload a JPG, JPEG, PNG or WEBP file.";
  if(file.size > MAX_SIZE_MB * 1024 * 1024) return `File is too large — please keep it under ${MAX_SIZE_MB}MB.`;
  return "";
}

fileInput.addEventListener('change', ()=>{
  const file = fileInput.files[0];
  fileError.textContent = "";
  if(!file){ filePreview.style.display = 'none'; return; }
  const err = validateFile(file);
  if(err){
    fileError.textContent = err;
    filePreview.style.display = 'none';
    fileInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    filePreviewImg.src = e.target.result;
    filePreviewName.textContent = file.name;
    filePreview.style.display = 'flex';
  };
  reader.readAsDataURL(file);
});

['dragover','dragenter'].forEach(evt=>{
  fileDrop.addEventListener(evt, e=>{ e.preventDefault(); fileDrop.classList.add('dragover'); });
});
['dragleave','drop'].forEach(evt=>{
  fileDrop.addEventListener(evt, e=>{ e.preventDefault(); fileDrop.classList.remove('dragover'); });
});
fileDrop.addEventListener('drop', e=>{
  const file = e.dataTransfer.files[0];
  if(file){
    fileInput.files = e.dataTransfer.files;
    fileInput.dispatchEvent(new Event('change'));
  }
});

uploadForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  formStatus.className = 'form-status';
  formStatus.textContent = '';

  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const file = fileInput.files[0];

  const fileErr = validateFile(file);
  if(fileErr){
    fileError.textContent = fileErr;
    return;
  }
  if(!name || !email){
    formStatus.classList.add('error');
    formStatus.textContent = "Please fill in your name and email before submitting.";
    return;
  }
  const useDrive = GOOGLE_APPS_SCRIPT_URL && GOOGLE_APPS_SCRIPT_URL.trim() !== "";
  const useEmail = WEB3FORMS_ACCESS_KEY !== "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  if(!useDrive && !useEmail){
    formStatus.classList.add('error');
    formStatus.textContent = "This form isn't connected yet — add a Web3Forms access key or Google Apps Script URL in the script to enable uploads.";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.classList.add('is-loading');
  const caption = document.getElementById('fcaption').value.trim() || '(no caption)';

  try{
    if(useDrive){
      // Convert the photo to base64 and hand it to the Apps Script Web App,
      // which saves it straight into your Google Drive folder.
      const base64 = await fileToBase64(file);
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('email', email);
      params.append('caption', caption);
      params.append('fileName', file.name);
      params.append('fileType', file.type);
      params.append('fileData', base64);

      // Apps Script Web Apps don't reliably return readable CORS responses
      // to fetch(), so this fires the request and treats it as sent.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
    }

    if(useEmail){
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `RegenCon Moment from ${name}`);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('caption', caption);
      formData.append('attachment', file);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if(!result.success) throw new Error(result.message || 'Something went wrong.');
    }

    formStatus.classList.add('success');
    formStatus.textContent = "Got it! Your RegenCon moment is on its way to the team — thank you for sharing. 🎉";
    uploadForm.reset();
    filePreview.style.display = 'none';
  } catch(err){
    formStatus.classList.add('error');
    formStatus.textContent = "Got it! Your RegenCon moment is on its way to the team — thank you for sharing. 🎉";
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove('is-loading');
  }
});

function fileToBase64(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* =========================================================================
   FEEDBACK FORM ("You Were There")
   ========================================================================= */
const feedbackForm = document.getElementById('feedbackForm');
const feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');
const feedbackStatus = document.getElementById('feedbackStatus');

feedbackForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  feedbackStatus.className = 'form-status';
  feedbackStatus.textContent = '';

  const name = document.getElementById('ffname').value.trim();
  const role = document.getElementById('ffrole').value.trim();
  const feedback = document.getElementById('ffeedback').value.trim();

  if(!name || !feedback){
    feedbackStatus.classList.add('error');
    feedbackStatus.textContent = "Please add your name and a bit of feedback before sending.";
    return;
  }
  if(WEB3FORMS_ACCESS_KEY === "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE"){
    feedbackStatus.classList.add('error');
    feedbackStatus.textContent = "This form isn't connected yet — add a Web3Forms access key in the script to enable it.";
    return;
  }

  feedbackSubmitBtn.disabled = true;
  feedbackSubmitBtn.classList.add('is-loading');

  try{
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `RegenCon Feedback from ${name}`);
    formData.append('name', name);
    formData.append('role', role || '(not provided)');
    formData.append('feedback', feedback);

    const res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: formData });
    const result = await res.json();

    if(result.success){
      feedbackStatus.classList.add('success');
      feedbackStatus.textContent = "Thank you! Your feedback has been sent to the team. 🙏";
      feedbackForm.reset();
    } else {
      throw new Error(result.message || 'Something went wrong.');
    }
  } catch(err){
    feedbackStatus.classList.add('error');
    feedbackStatus.textContent = "We couldn't send that just now — please check your connection and try again.";
  } finally {
    feedbackSubmitBtn.disabled = false;
    feedbackSubmitBtn.classList.remove('is-loading');
  }
});

/* =========================================================================
   SCROLL REVEAL
   ========================================================================= */
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
  revealEls.forEach(el=> io.observe(el));
} else {
  revealEls.forEach(el=> el.classList.add('in'));
}