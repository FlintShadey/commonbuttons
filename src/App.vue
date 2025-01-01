<template>
  <div id="app">
    <button @click="copyAdult" class="copy-button adult-button">Adult</button>
    <button @click="copyMom" class="copy-button mom-button">Mom</button>
    <button @click="copyDad" class="copy-button dad-button">Dad</button>
    <button @click="copyParents" class="copy-button parents-button">
      Parents
    </button>
    <button @click="copyGuardian" class="copy-button guardian-button">
      Guardian
    </button>
    <hr />
    <button @click="copyuri" class="copy-button uri-button">
      URI
    </button>
    <button @click="copyDxUri" class="copy-button dx-uri-button">
      Dx:URI
    </button>
    <button @click="copySinus" class="copy-button sinus-button">
      Sinus
    </button>
    <button @click="copyDxSinus" class="copy-button dx-sinus-button">
      Dx:Sinus
    </button>
    <button @click="copyBronchitis" class="copy-button bronchitis-button">
      Bronchitis
    </button>
    <button @click="copyDxBronchitis" class="copy-button dx-bronchitis-button">
      Dx:Bronchitis
    </button>
    <hr />
    <button @click="copyekg" class="copy-button ekg-button">
      EKG
    </button>
  
  </div>
</template>


<script>
export default {
  data() {
    return {
      adultText:
        "The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.",
      momText:
        "The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.",
      dadText:
        "The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.",
      parentsText:
        "The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.",
      guardianText:
        "The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged.",
      uriText:
        "The patient presents with cough and congestion. Sinusitis could cause congestion and cough, but it is usually accompanied by facial pain, pressure, and symptoms lasting more than 10 days, which are not present.\n\nBronchitis can present with a cough, but it is typically associated with more severe symptoms such as persistent wheezing or mucus production, which is not the case here.\n\nAllergic Rhinitis might cause congestion and cough due to post-nasal drip, but it is typically associated with sneezing, itching, and watery eyes, which are not present.\n\nPneumonia might present with cough and congestion, but it is usually associated with fever, difficulty breathing, and abnormal lung sounds, which are absent in this presentation.\n\nUpper Respiratory Infection is often viral and is a common cause of cough and congestion, frequently accompanied by mild fatigue or a sore throat. The patient’s presentation aligns well with this diagnosis.\n\nBased on the clinical presentation, upper respiratory infection is considered the most likely diagnosis. The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      DxUriText:
        "NASAL CONGESTION - [R09.81] , OTHER FATIGUE- [R53.83], ACUTE UPPER RESPIRATORY INFECTION UNSPECIFIED  - [J06.9], COUGH - [R05], PAIN IN THROAT - [R07.0], MYALGIA, UNSPECIFIED SITE - (M79.10), CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828]",
      sinusText:
        "The patient presents with facial pain and congestion.\n\nMigraine could cause facial pain, but it is typically associated with unilateral throbbing headaches, nausea, and sensitivity to light or sound. These symptoms are not present.\n\nDental Abscess might present with facial pain, especially around the affected tooth, and is usually accompanied by dental symptoms such as toothache, swelling in the gums, or fever. These symptoms are not present.\n\nAllergic Rhinitis can cause congestion, but it is typically associated with itching, sneezing, and watery eyes. These symptoms are not present.\n\nTonsillitis could present with facial pain and congestion, but it is usually accompanied by a sore throat, swollen tonsils, and fever. These symptoms are not present.\n\nSinusitis is an inflammation of the sinuses that typically presents with facial pain or pressure, nasal congestion, purulent nasal discharge, and may be accompanied by fever or fatigue. The patient's symptoms align well with this diagnosis.\n\nBased on the clinical presentation, sinusitis is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      DxSinusText:
        "FACIAL PAIN - [R10.2], NASAL CONGESTION - [R09.81], ACUTE SINUSITIS - [J01.90], CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828], HEADACHE, UNSPECIFIED - (R51.9],  ILLNESS, UNSPECIFIED - [R691, NASAL CONGESTION - [R09.81], ACUTE UPPER RESPIRATORY INFECTION, UNSPECIFIED - [J06.9]",
      bronchitisText:
        "The patient presents with a cough.\n\nAsthma could cause wheezing and cough, but it is typically associated with shortness of breath, chest tightness, and symptoms that are often triggered by exercise, allergens, or cold air. These symptoms are not present.\n\nPneumonia might present with a cough and wheezing, but it is usually associated with fever, difficulty breathing, and abnormal lung sounds, which are absent in this presentation.\n\nChronic Obstructive Pulmonary Disease (COPD) could cause wheezing and cough, but it is typically associated with a history of smoking, chronic cough, and shortness of breath. These symptoms are not present.\n\nBronchitis is an inflammation of the bronchial tubes that typically presents with a cough, wheezing, and may be accompanied by mucus production. The patient's symptoms align well with this diagnosis.\n\nBased on the clinical presentation, bronchitis is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      DxBronchitisText:
        "COUGH - [R05], CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828], BRONCHITIS, NOT SPECIFIED AS ACUTE OR CHRONIC - [J40], ILLNESS, UNSPECIFIED - [R69.1], MYALGIA, UNSPECIFIED SITE - [M79.10], FATIGUE - [R53.83]",
      ekgText:
        "EKG Interpretation was performed and documented.",
    };
  },
  methods: {
    copyAdult() {
      navigator.clipboard
        .writeText(this.adultText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyMom() {
      navigator.clipboard
        .writeText(this.momText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyDad() {
      navigator.clipboard
        .writeText(this.dadText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyParents() {
      navigator.clipboard
        .writeText(this.parentsText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyGuardian() {
      navigator.clipboard
        .writeText(this.guardianText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyuri() {
      navigator.clipboard
        .writeText(this.uriText)
        .then(() => {
          console.log("URI text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy URI text: ", err);
        });
    },
    copyDxUri() {
      navigator.clipboard
        .writeText(this.DxUriText)
        .then(() => {
          console.log("Dx:URI text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy Dx:URI text: ", err);
        });
    },
    copySinus() {
      navigator.clipboard
        .writeText(this.sinusText)
        .then(() => {
          console.log("Sinus text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy Sinus text: ", err);
        });
    },
    copyDxSinus() {
      navigator.clipboard
        .writeText(this.DxSinusText)
        .then(() => {
          console.log("Dx:Sinus text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy Dx:Sinus text: ", err);
        });
    },
    copyBronchitis() {
      navigator.clipboard
        .writeText(this.bronchitisText)
        .then(() => {
          console.log("Bronchitis text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy Bronchitis text: ", err);
        });
    },
    copyDxBronchitis() {
      navigator.clipboard
        .writeText(this.DxBronchitisText)
        .then(() => {
          console.log("Dx:Bronchitis text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy Dx:Bronchitis text: ", err);
        });
    },
    copyekg() {
      navigator.clipboard
        .writeText(this.ekgText)
        .then(() => {
          console.log("EKG text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy EKG text: ", err);
        });
    },
  },
};
</script>


<style scoped>
.copy-button {
  color: #fff; /* White text */
  padding: 10px 20px; /* Large padding for size */
  font-size: 18px; /* Larger font size */
  border: none;
  margin:1px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0.5%; /* Smaller margin */
}


.adult-button {
  background-color: #00ff9d; /* Golden yellow color */
}


.adult-button:hover {
  background-color: #1d804e; /* Slightly darker yellow on hover */
}


.mom-button {
  background-color: #ff69b4; /* Pink color */
}


.mom-button:hover {
  background-color: #c71585; /* Slightly darker pink on hover */
}


.dad-button {
  background-color: #1e90ff; /* Blue color */
}


.dad-button:hover {
  background-color: #135da7; /* Slightly darker blue on hover */
}


.parents-button {
  background-color: #b41ab4; /* Purple color */
}


.parents-button:hover {
  background-color: #4b0082; /* Slightly darker purple on hover */
}


.guardian-button {
  background-color: #808080; /* Gray color */
}


.guardian-button:hover {
  background-color: #696969; /* Slightly darker gray on hover */
}


.uri-button {
  background-color: #a8d824; /* Yellow color */
}

.uri-button:hover {
  background-color: #2caa27; /* Gold on hover */
}

.dx-uri-button {
  background-color: #a8d824; /* Orange color */
}
.dx-uri-button:hover {
  background-color: #2caa27; /* Gold on hover */
}
.sinus-button {
  background-color: peachpuff; /* Pink color */
}
.sinus-button:hover {
  background-color: rgb(212, 167, 126); /* Slightly darker pink on hover */
}
.dx-sinus-button {
  background-color: peachpuff; /* Pink color */
}
.dx-sinus-button:hover {
  background-color: rgb(212, 167, 126); /* Slightly darker pink on hover */
}
.bronchitis-button {
  background-color: #3ea1c5; /* blue color */
}
.bronchitis-button:hover {
  background-color: #2e6da4; /* Slightly darker blue on hover */
}
.dx-bronchitis-button {
  background-color: #3ea1c5; /* blue color */
}
.dx-bronchitis-button:hover {
  background-color: #2e6da4; /* Slightly darker blue on hover */
}
.ekg-button {
  background-color: #f3cde0; /* Pink color */
}

.ekg-button:hover {
  background-color: #c71585; /* Slightly darker pink on hover */
}

.text-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
}
</style>

