<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Flints Copy-o-Matic Buttons</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="darkTheme" @change="toggleTheme">
        <template v-slot:label>
          <v-icon><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg></v-icon>
        </template>
      </v-switch>
    </v-app-bar>
    <v-main>
      <!-- <div style="background-color:blue; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"></div> -->
    <div class="button-container">

        <button @click="copyAdult" class="copy-button adult-button">Adult</button>
        <button @click="copyMom" class="copy-button mom-button">Mom</button>
        <button @click="copyDad" class="copy-button dad-button">Dad</button>
        <button @click="copyParents" class="copy-button parents-button">Parents</button>
        <button @click="copyGuardian" class="copy-button guardian-button">Guardian</button>
        <hr />
        <button @click="copyuri" class="copy-button uri-button">URI</button>
        <button @click="copyDxUri" class="copy-button dx-uri-button">Dx:URI</button>
        <button @click="copySinus" class="copy-button sinus-button">Sinus</button>
        <button @click="copyDxSinus" class="copy-button dx-sinus-button">Dx:Sinus</button>
        <button @click="copyBronchitis" class="copy-button bronchitis-button">Bronchitis</button>
        <button @click="copyDxBronchitis" class="copy-button dx-bronchitis-button">Dx:Bronchitis</button>
        <hr />
        <button @click="copySplintCheck" class="copy-button splint-check-button">Splint Check</button>
        <button @click="copyEKG" class="copy-button ekg-button">EKG</button>
    
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
      adultText: 'The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.',
      momText: 'The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.',
      dadText: 'The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.',
      parentsText: 'The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.',
      guardianText: 'The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged.',
      uriText: `Patient presents with cough and congestion.

Allergic Rhinitis can cause similar symptoms but is usually associated with itching, sneezing, and clear nasal discharge, which are not emphasized in this case.

Pneumonia might present with cough and congestion, but it is usually associated with fever, difficulty breathing, and abnormal lung sounds, which are absent in this presentation.

Sinusitis can cause congestion and cough, but it is often accompanied by facial pain and pressure, which do not appear to be present in this case.

URI is a common viral illness causing cough, nasal congestion, and sometimes sore throat or mild fever. The patients symptoms align well with this diagnosis.

Based on the clinical presentation, URI is considered the most likely diagnosis.

The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
    

      dxUriText: 'NASAL CONGESTION - [R09.81] , OTHER FATIGUE- [R53.83], ACUTE UPPER RESPIRATORY INFECTION UNSPECIFIED  - [J06.9], COUGH - [R05], PAIN IN THROAT - [R07.0], MYALGIA, UNSPECIFIED SITE - (M79.10), CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828]',
      sinusText: `The patient presents with facial pain and congestion.
Migraine could cause facial pain, but it is typically associated with unilateral throbbing headaches, nausea, and sensitivity to light or sound. These symptoms are not present.
Dental Abscess might present with facial pain, especially around the affected tooth, and is usually accompanied by dental symptoms such as toothache, swelling in the gums, or fever. These symptoms are not present.
Allergic Rhinitis can cause congestion, but it is typically associated with itching, sneezing, and watery eyes. These symptoms are not present.
Tonsillitis could present with facial pain and congestion, but it is usually accompanied by a sore throat, swollen tonsils, and fever. These symptoms are not present.
Sinusitis is an inflammation of the sinuses that typically presents with facial pain or pressure, nasal congestion, purulent nasal discharge, and may be accompanied by fever or fatigue. The patients symptoms align well with this diagnosis.
Based on the clinical presentation, sinusitis is considered the most likely diagnosis.
The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
      dxSinusText: 'ACUTE SINUSITIS, UNSPECIFIED - [J01.90],  HEADACHE, UNSPECIFIED - (R51.9],  ILLNESS, UNSPECIFIED - [R691, NASAL CONGESTION - [R09.81], ACUTE UPPER RESPIRATORY INFECTION, UNSPECIFIED - [J06.9] ',
bronchitisText: `Patient presents with a cough.
    
    Pneumonia could cause a productive cough, but it is typically associated with hypoxia and shortness of breath which are not noted in this case.
    
    Asthma can present with a cough, especially when triggered by environmental factors, but it is often associated with wheezing and shortness of breath, which are not emphasized here.
    
    Allergic Rhinitis can cause a cough due to post-nasal drip, but this is usually accompanied by sneezing, itching, and watery eyes, which are not the primary symptoms.
    
    Bronchitis is commonly caused by a respiratory  infection.  The patient's symptoms align well with this diagnosis.
    
    Based on the clinical presentation, bronchitis is considered the most likely diagnosis.
    
    The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.
    `,
      dxBronchitisText: 'ACUTE BRONCHITIS, UNSPECIFIED - [J20.9], BRONCHITIS, NOT SPECIFIED AS ACUTE OR CHRONIC - [J40], ACUTE COUGH - [R05.1], COUGH, UNSPECIFIED - [R05.9], DYSPNEA, UNSPECIFIED - [R06.00]',
      splintCheckText: 'After applying the splint, I checked the patients neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the splint as it was not exerting pressure on any nerve or blood vessel. The patient received guidance on splint care and was informed about when to seek further medical care.',
      ekgText: 'EKG Interpretation was performed and documented.'
    }
  },
 methods: {
    toggleTheme() {
      this.$vuetify.theme.global.name = this.darkTheme ? 'dark' : 'light'
    },
    copyText(text) {
      navigator.clipboard.writeText(text)
        .then(() => console.log('Text copied to clipboard'))
        .catch(err => console.error('Failed to copy text: ', err))
    },
    copyAdult() {
      this.copyText(this.adultText)
    },
    copyMom() {
      this.copyText(this.momText)
    },
    copyDad() {
      this.copyText(this.dadText)
    },
    copyParents() {
      this.copyText(this.parentsText)
    },
    copyGuardian() {
      this.copyText(this.guardianText)
    },
    copyuri() {
      this.copyText(this.uriText)
    },
    copyDxUri() {
      this.copyText(this.dxUriText)
    },
    copySinus() {
      this.copyText(this.sinusText)
    },
    copyDxSinus() {
      this.copyText(this.dxSinusText)
    },
    copyBronchitis() {
      this.copyText(this.bronchitisText)
    },
    copyDxBronchitis() {
      this.copyText(this.dxBronchitisText)
    },
    copySplintCheck() {
      this.copyText(this.splintCheckText)
    },
    copyEKG() {
      this.copyText(this.ekgText)
    },
  }
}
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
  background-color: #f44336; /* Red color */
}

.adult-button:hover {
  background-color: #1d804e; /* Slightly darker yellow on hover */
}

.mom-button {
  background-color: #e91e63; /* Pink color */
}

.mom-button:hover {
  background-color: #c71585; /* Slightly darker pink on hover */
}

.dad-button {
  background-color: #9c27b0; /* Purple color */
}

.dad-button:hover {
  background-color: #135da7; /* Slightly darker blue on hover */
}

.parents-button {
  background-color: #673ab7; /* Deep Purple color */
}

.parents-button:hover {
  background-color: #4b0082; /* Slightly darker purple on hover */
}

.guardian-button {
  background-color: #3f51b5; /* Indigo color */
}

.guardian-button:hover {
  background-color: #696969; /* Slightly darker gray on hover */
}

.uri-button {
  background-color: #2196f3; /* Blue color */
}

.uri-button:hover {
  background-color: #2caa27; /* Gold on hover */
}

.dx-uri-button {
  background-color: #03a9f4; /* Light Blue color */
}

.dx-uri-button:hover {
  background-color: #2caa27; /* Gold on hover */
}

.sinus-button {
  background-color: #00bcd4; /* Cyan color */
}

.sinus-button:hover {
  background-color: rgb(212, 167, 126); /* Slightly darker pink on hover */
}

.dx-sinus-button {
  background-color: #009688; /* Teal color */
}

.dx-sinus-button:hover {
  background-color: rgb(212, 167, 126); /* Slightly darker pink on hover */
}

.bronchitis-button {
  background-color: #4caf50; /* Green color */
}

.bronchitis-button:hover {
  background-color: #2e6da4; /* Slightly darker blue on hover */
}

.dx-bronchitis-button {
  background-color: #8bc34a; /* Light Green color */
}

.dx-bronchitis-button:hover {
  background-color: #2e6da4; /* Slightly darker blue on hover */
}
.splint-check-button {
  background-color: #ff9800; /* Orange color */
}
.splint-check-button:hover {
  background-color: #6b696a; /* Slightly darker silver on hover */
}

.ekg-button {
  background-color: rgb(228, 164, 164); /* silver color */
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
.button-container {
  padding: 20px;
}
</style>

