// Sample data

const slider = document.querySelector('.image-slider .slider');
const images = document.querySelectorAll('.image-slider .slider img');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

let currentIndex = 0;

// Add buttons dynamically
prevBtn.textContent = '<';
nextBtn.textContent = '>';
prevBtn.classList.add('prev');
nextBtn.classList.add('next');
document.querySelector('.image-slider').appendChild(prevBtn);
document.querySelector('.image-slider').appendChild(nextBtn);

const updateSliderPosition = () => {
  const slideWidth = images[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSliderPosition();
};

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
};

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Adjust slider on window resize
window.addEventListener('resize', updateSliderPosition);

// --------------------------------------------------------
const diseaseData = {
  cold: {
    symptoms: ["Runny Nose", "Sore Throat", "Sneezing", "Cough"],
    medicines: {
      "Runny Nose": ["Cetirizine", "Loratadine"],
      "Sore Throat": ["Strepsils", "Saltwater Gargle"],
      "Sneezing": ["Levocetirizine", "Montelukast"],
      "Cough": ["Benadryl", "Dextromethorphan"]
    }
  },
  fever: {
    symptoms: ["High Temperature", "Chills", "Body Ache", "Fatigue"],
    medicines: {
      "High Temperature": ["Paracetamol", "Ibuprofen"],
      "Chills": ["Acetaminophen", "Warm Fluids"],
      "Body Ache": ["Ibuprofen", "Naproxen"],
      "Fatigue": ["Electrolyte Drinks", "Vitamin C"]
    }
  },
  headache: {
    symptoms: ["Migraine", "Tension", "Cluster", "Sinus"],
    medicines: {
      Migraine: ["Sumatriptan", "Rizatriptan"],
      Tension: ["Ibuprofen", "Aspirin"],
      Cluster: ["Oxygen Therapy", "Verapamil"],
      Sinus: ["Pseudoephedrine", "Nasal Spray"]
    }
  },
  allergy: {
    symptoms: ["Sneezing", "Itchy Eyes", "Rash", "Swelling"],
    medicines: {
      Sneezing: ["Antihistamines", "Decongestants"],
      "Itchy Eyes": ["Eye Drops", "Antihistamines"],
      Rash: ["Corticosteroid Cream", "Antihistamines"],
      Swelling: ["Corticosteroids", "Antihistamines"]
    }
  },
  asthma: {
    symptoms: ["Shortness of Breath", "Coughing", "Wheezing", "Chest Tightness"],
    medicines: {
      "Shortness of Breath": ["Inhalers", "Steroids"],
      Coughing: ["Cough Syrup", "Bronchodilators"],
      Wheezing: ["Inhalers", "Corticosteroids"],
      "Chest Tightness": ["Inhalers", "Steroids"]
    }
  },
  diabetes: {
    symptoms: ["Excessive Thirst", "Fatigue", "Frequent Urination", "Blurred Vision"],
    medicines: {
      "Excessive Thirst": ["Insulin", "Metformin"],
      Fatigue: ["Metformin", "Insulin"],
      "Frequent Urination": ["Insulin", "Diuretics"],
      "Blurred Vision": ["Insulin", "Blood Glucose Control"]
    }
  },
  hypertension: {
    symptoms: ["Headache", "Dizziness", "Fatigue", "Chest Pain"],
    medicines: {
      Headache: ["Aspirin", "Ibuprofen"],
      Dizziness: ["Beta-Blockers", "Diuretics"],
      Fatigue: ["ACE Inhibitors", "Beta-Blockers"],
      "Chest Pain": ["Nitroglycerin", "Aspirin"]
    }
  },
  flu: {
    symptoms: ["Fever", "Fatigue", "Muscle Aches", "Cough"],
    medicines: {
      Fever: ["Paracetamol", "Ibuprofen"],
      Fatigue: ["Rest", "Fluids"],
      "Muscle Aches": ["Pain Relievers", "Rest"],
      Cough: ["Cough Syrup", "Honey"]
    }
  },
  migraine: {
    symptoms: ["Nausea", "Sensitivity to Light", "Throbbing Pain", "Vomiting"],
    medicines: {
      Nausea: ["Anti-nausea Medication", "Ondansetron"],
      "Sensitivity to Light": ["Pain Relievers", "Beta-Blockers"],
      "Throbbing Pain": ["Sumatriptan", "Rizatriptan"],
      Vomiting: ["Anti-nausea Medication", "Antihistamines"]
    }
  },
  cough: {
    symptoms: ["Dry Cough", "Productive Cough", "Wheezing", "Sore Throat"],
    medicines: {
      "Dry Cough": ["Cough Syrup", "Lozenges"],
      "Productive Cough": ["Expectorants", "Mucolytics"],
      Wheezing: ["Inhalers", "Steroids"],
      "Sore Throat": ["Pain Relievers", "Lozenges"]
    }
  },
  indigestion: {
    symptoms: ["Heartburn", "Bloating", "Gas", "Nausea"],
    medicines: {
      Heartburn: ["Antacids", "H2 Blockers"],
      Bloating: ["Simethicone", "Probiotics"],
      Gas: ["Activated Charcoal", "Antacids"],
      Nausea: ["Anti-nausea Medication", "Ginger"]
    }
  },

  


  
    arthritis: {
        symptoms: ["Joint Pain", "Stiffness", "Swelling", "Redness"],
        medicines: {
            "Joint Pain": ["Acetaminophen", "NSAIDs"],
            Stiffness: ["Steroid Injections", "Heat Therapy"],
            Swelling: ["NSAIDs", "Corticosteroids"],
            Redness: ["Corticosteroids", "NSAIDs"]
        }
    },
    ulcer: {
        symptoms: ["Stomach Pain", "Bloating", "Nausea", "Heartburn"],
        medicines: {
            "Stomach Pain": ["Antacids", "Proton Pump Inhibitors"],
            Bloating: ["Simethicone", "Antacids"],
            Nausea: ["Anti-nausea Medication", "Proton Pump Inhibitors"],
            Heartburn: ["Antacids", "H2 Blockers"]
        }
    },
    stroke: {
        symptoms: ["Sudden Numbness", "Difficulty Speaking", "Severe Headache", "Vision Problems"],
        medicines: {
            "Sudden Numbness": ["Antiplatelet Drugs", "Clot-Busting Medications"],
            "Difficulty Speaking": ["Speech Therapy", "Aspirin"],
            "Severe Headache": ["Pain Relievers", "Steroids"],
            "Vision Problems": ["Rehabilitation", "Steroids"]
        }
    },
    pneumonia: {
        symptoms: ["Cough", "Shortness of Breath", "Chest Pain", "Fever"],
        medicines: {
            Cough: ["Cough Syrup", "Expectorants"],
            "Shortness of Breath": ["Oxygen Therapy", "Steroids"],
            "Chest Pain": ["Pain Relievers", "Antibiotics"],
            Fever: ["Paracetamol", "Ibuprofen"]
        }
    },
    chickenpox: {
        symptoms: ["Itchy Rash", "Fever", "Tiredness", "Headache"],
        medicines: {
            "Itchy Rash": ["Calamine Lotion", "Antihistamines"],
            Fever: ["Paracetamol", "Ibuprofen"],
            Tiredness: ["Rest", "Fluids"],
            Headache: ["Pain Relievers", "Acetaminophen"]
        }
    },
    tuberculosis: {
        symptoms: ["Cough", "Chest Pain", "Night Sweats", "Fatigue"],
        medicines: {
            Cough: ["Cough Syrup", "Expectorants"],
            "Chest Pain": ["Pain Relievers", "Antibiotics"],
            "Night Sweats": ["Antipyretics", "Hydration"],
            Fatigue: ["Rest", "Antibiotics"]
        }
    },
    meningitis: {
        symptoms: ["Severe Headache", "Stiff Neck", "Fever", "Nausea"],
        medicines: {
            "Severe Headache": ["Pain Relievers", "Steroids"],
            "Stiff Neck": ["Steroids", "Pain Relievers"],
            Fever: ["Paracetamol", "Ibuprofen"],
            Nausea: ["Anti-nausea Medications", "Ondansetron"]
        }
    },
    sepsis: {
        symptoms: ["Fever", "Shivering", "Rapid Heart Rate", "Shortness of Breath"],
        medicines: {
            Fever: ["Antibiotics", "Paracetamol"],
            Shivering: ["Warm Blankets", "Antibiotics"],
            "Rapid Heart Rate": ["IV Fluids", "Vasopressors"],
            "Shortness of Breath": ["Oxygen Therapy", "Antibiotics"]
        }
    },
    bipolar: {
        symptoms: ["Mood Swings", "Depression", "Mania", "Irritability"],
        medicines: {
            Mood: ["Lithium", "Antipsychotics"],
            Depression: ["Antidepressants", "Lithium"],
            Mania: ["Antipsychotics", "Mood Stabilizers"],
            Irritability: ["Mood Stabilizers", "Antidepressants"]
        }
    },
    depression: {
        symptoms: ["Low Mood", "Fatigue", "Loss of Interest", "Suicidal Thoughts"],
        medicines: {
            "Low Mood": ["Antidepressants", "Cognitive Behavioral Therapy"],
            Fatigue: ["Stimulants", "Sleep Aids"],
            "Loss of Interest": ["Antidepressants", "Psychotherapy"],
            "Suicidal Thoughts": ["Antidepressants", "Psychotherapy"]
        }
    },
    Eczema: {
        symptoms: ["Itchy Skin", "Redness", "Inflammation", "Dry Skin"],
        medicines: {
            Itchy_Skin: ["Antihistamines", "Corticosteroids"],
            Redness: ["Corticosteroid Cream", "Antihistamines"],
            Inflammation: ["Corticosteroids", "Topical Steroids"],
            "Dry Skin": ["Moisturizers", "Topical Steroids"]
        }
    },
    scabies: {
        symptoms: ["Itching", "Rash", "Sores", "Red Bumps"],
        medicines: {
            Itching: ["Permethrin Cream", "Lindane Lotion"],
            Rash: ["Topical Steroids", "Antihistamines"],
            Sores: ["Antibiotics", "Topical Steroids"],
            "Red Bumps": ["Permethrin Cream", "Hydrocortisone"]
        }
    },
    ringworm: {
        symptoms: ["Red, Itchy Rash", "Circular Red Patches", "Scaly Skin", "Bumps"],
        medicines: {
            "Red, Itchy Rash": ["Antifungal Creams", "Oral Antifungals"],
            "Circular Red Patches": ["Antifungal Creams", "Oral Antifungals"],
            "Scaly Skin": ["Antifungal Creams", "Antihistamines"],
            Bumps: ["Topical Antifungal Creams", "Steroid Creams"]
        }
    },
    hepatitis_b: {
        symptoms: ["Fatigue", "Jaundice", "Abdominal Pain", "Loss of Appetite"],
        medicines: {
            Fatigue: ["Rest", "Antivirals"],
            Jaundice: ["Antivirals", "Steroids"],
            "Abdominal Pain": ["Pain Relievers", "Antivirals"],
            "Loss of Appetite": ["Appetite Stimulants", "Antivirals"]
        }
    },
    diabetes_mellitus: {
        symptoms: ["Excessive Thirst", "Frequent Urination", "Fatigue", "Blurred Vision"],
        medicines: {
            "Excessive Thirst": ["Insulin", "Metformin"],
            "Frequent Urination": ["Insulin", "Diuretics"],
            Fatigue: ["Metformin", "Insulin"],
            "Blurred Vision": ["Insulin", "Blood Glucose Control"]
        }
    },
    hypertension: {
        symptoms: ["Headache", "Dizziness", "Fatigue", "Chest Pain"],
        medicines: {
            Headache: ["Aspirin", "Ibuprofen"],
            Dizziness: ["Beta-Blockers", "Diuretics"],
            Fatigue: ["ACE Inhibitors", "Beta-Blockers"],
            "Chest Pain": ["Nitroglycerin", "Aspirin"]
        }
    }
};



  


// DOM Elements
const diseaseSelect = document.getElementById("disease");
const symptomsContainer = document.getElementById("symptoms-container");
const symptomsList = document.getElementById("symptoms-list");
const medicineContainer = document.getElementById("medicine-container");
const medicineList = document.getElementById("medicine-list");

// Event listener for disease selection
diseaseSelect.addEventListener("change", () => {
  const disease = diseaseSelect.value;
  if (disease) {
    const symptoms = diseaseData[disease].symptoms;
    displaySymptoms(symptoms);
    showDiseaseDetails(disease); // Show details in alert
  } else {
    symptomsContainer.classList.add("hidden");
    medicineContainer.classList.add("hidden");
  }
});

// Display symptoms
function displaySymptoms(symptoms) {
  symptomsList.innerHTML = "";
  symptoms.forEach((symptom) => {
    const li = document.createElement("li");
    li.textContent = symptom;
    li.addEventListener("click", () => displayMedicines(symptom));
    symptomsList.appendChild(li);
  });
  symptomsContainer.classList.remove("hidden");
  medicineContainer.classList.add("hidden");
}

// Display medicines for a symptom
function displayMedicines(symptom) {
  const disease = diseaseSelect.value;
  const medicines = diseaseData[disease].medicines[symptom];
  medicineList.innerHTML = "";
  medicines.forEach((medicine) => {
    const li = document.createElement("li");
    li.textContent = medicine;
    medicineList.appendChild(li);
  });
  medicineContainer.classList.remove("hidden");
}

// Show disease details in alert
function showDiseaseDetails(disease) {
  const diseaseInfo = diseaseData[disease];
  const symptoms = diseaseInfo.symptoms.join(", ");
  const medicines = Object.keys(diseaseInfo.medicines)
    .map(symptom => `${symptom}: ${diseaseInfo.medicines[symptom].join(", ")}`)
    .join("\n");

  // Alert with disease, symptoms, and medicines
  // alert(`Disease: ${disease.charAt(0).toUpperCase() + disease.slice(1)}\n\nSymptoms: ${symptoms}\n\nMedicines:\n${medicines}`);
}









