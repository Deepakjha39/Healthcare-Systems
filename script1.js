// Disease-to-Department Mapping
const departmentData = {
    "parkinson disease": "Neurology",
    cancer: "Oncology",
    diabetes: "Endocrinology",
    "heart attack": "Cardiology",
    stroke: "Neurology",
    asthma: "Pulmonology",
    skin_rash: "Dermatology",
    arthritis: "Rheumatology",
    "kidney stones": "Urology",
    depression: "Psychiatry",
    pneumonia: "Pulmonology",
    hypertension: "Cardiology",
    tuberculosis: "Pulmonology",
    migraine: "Neurology",
    "hepatitis b": "Gastroenterology",
    scabies: "Dermatology",
    "ringworm infection": "Dermatology",
    sepsis: "Critical Care Medicine",
    meningitis: "Infectious Diseases",
    eczema: "Dermatology",
    chickenpox: "Pediatrics",
    nerve : "Neurology",



chickenpox: "Pediatrics",  
nerve: "Neurology",  
heart: "Cardiology",  
kidney: "Nephrology",  
skin: "Dermatology",  
bone: "Orthopedics",  
diabetes: "Endocrinology",  
eye: "Ophthalmology",  
ear: "Otolaryngology (ENT)",  
stomach: "Gastroenterology",  
pregnancy: "Gynecology/Obstetrics",  
lungs: "Pulmonology",  
"mental health": "Psychiatry",  
cancer: "Oncology",  
"immune system": "Immunology",  
infections: "Infectious Diseases",  
joints: "Rheumatology",  
blood: "Hematology",  
teeth: "Dentistry",  
children: "Pediatrics",  
aging: "Geriatrics",  
thyroid: "Endocrinology",  
brain: "Neurology",  
pain: "Pain Management",  
allergy: "Allergology",  
liver: "Hepatology",  
urinary: "Urology",  
pregnancy_care: "Obstetrics",  
"birth control": "Gynecology",  
injuries: "Traumatology",  
"sports injuries": "Sports Medicine",






fever: "General Medicine",
headache: "Neurology",
migraine: "Neurology",
depression: "Psychiatry",
anxiety: "Psychiatry",
obesity: "Endocrinology",
asthma: "Pulmonology",
arthritis: "Rheumatology",
fracture: "Orthopedics",
"back pain": "Orthopedics",
"spinal cord": "Neurology",
stroke: "Neurology",
hypertension: "Cardiology",
"chest pain": "Cardiology",
"acid reflux": "Gastroenterology",
ulcers: "Gastroenterology",
constipation: "Gastroenterology",
diarrhea: "Gastroenterology",
hepatitis: "Hepatology",
appendicitis: "Surgery",
gallstones: "Surgery",
sinus: "Otolaryngology (ENT)",
tonsillitis: "Otolaryngology (ENT)",
cataracts: "Ophthalmology",
glaucoma: "Ophthalmology",
eczema: "Dermatology",
psoriasis: "Dermatology",
acne: "Dermatology",
"hair loss": "Dermatology",
"menstrual problems": "Gynecology",
infertility: "Gynecology",
"sexual health": "Urology",
prostate: "Urology",
"urinary tract infection": "Urology",
anemia: "Hematology",
leukemia: "Hematology",
lymphoma: "Oncology",
"breast cancer": "Oncology",
"colorectal cancer": "Oncology",
"HIV/AIDS": "Infectious Diseases",
"COVID-19": "Infectious Diseases",
tuberculosis: "Infectious Diseases",
rashes: "Dermatology",
dizziness: "Neurology",
seizures: "Neurology",
fatigue: "General Medicine",
"sleep disorders": "Sleep Medicine",
"vitamin deficiency": "Nutrition",
burns: "Plastic Surgery",
rehabilitation: "Physical Medicine & Rehabilitation",
"pediatric growth issues": "Pediatrics",
"childhood vaccinations": "Pediatrics",
"speech disorders": "Speech Therapy",
"hearing loss": "Otolaryngology (ENT)",
"thyroid disorders": "Endocrinology",
pancreatitis: "Gastroenterology",
"liver cirrhosis": "Hepatology",
osteoporosis: "Endocrinology",
"joint pain": "Rheumatology",
"plantar fasciitis": "Orthopedics",
gangrene: "Surgery",
hernias: "Surgery",
"drug addiction": "Psychiatry",
autism: "Developmental Pediatrics",
ADHD: "Developmental Pediatrics",
"Alzheimer's": "Neurology",
"Parkinson's disease": "Neurology",
"multiple sclerosis": "Neurology",
"autoimmune diseases": "Immunology",
vaccination: "Preventive Medicine",
malaria: "Infectious Diseases",
dengue: "Infectious Diseases",
rabies: "Infectious Diseases",
"bed sores": "Wound Care",
"cleft lip": "Plastic Surgery",
liposuction: "Cosmetic Surgery",
transplantation: "Transplant Medicine",
"vascular diseases": "Vascular Surgery",
gangrene: "Vascular Surgery",




  };
  
  // Function to suggest medical departments
  function suggestDepartment() {
    const diseaseInput = document.getElementById("diseaseInput").value.trim().toLowerCase();
    const suggestionsContainer = document.getElementById("suggestionsContainer");
  
    // Clear previous suggestions
    suggestionsContainer.innerHTML = "";
  
    if (diseaseInput === "") {
      suggestionsContainer.innerHTML = "<p>Please enter a disease name.</p>";
      return;
    }
  
    // Check for the department match
    const department = departmentData[diseaseInput];
  
    if (department) {
      suggestionsContainer.innerHTML = `
        <div class="suggestion-box">
          <h2>Suggested Department:</h2>
          <p><strong>${department}</strong></p>
        </div>
      `;
    } else {
      suggestionsContainer.innerHTML = `
        <div class="suggestion-box">
          <h2>No Match Found</h2>
          <p>We could not find a department for the entered disease. Please consult a general physician for guidance.</p>
        </div>
      `;
    }
  }
  