document.addEventListener('DOMContentLoaded', function() {
   
    const missions = [
      {
        "mission": "MISSION_TEST",
        "name": "Misión de Prueba",
        "objectives": [
          {
            "objective": "OBJ_TEST1",
            "name": "Juega 10 partidas",
            "type": "WAGERS_COUNT",
            "amount": "10",
            "description": "Juega 10 partidas de al menos 2 soles en Aviator o Spaceman."
          },
          {
            "objective": "OBJ_TEST2",
            "name": "2 apuestas de 10 soles",
            "type": "SPORTBETTING_WAGERS_COUNT",
            "amount": "2",
            "description": "Realiza 2 apuestas de al menos 10 soles en eventos deportivos."
          }
        ],
        "init_date": "2023-09-28 05:00:00",
        "end_date": "2023-10-28 17:43:26",
        "prize": 10,
        "cms": {
          "summary_title": "¡Gana 10 soles!",
          "summary_body": "<p>Consigue 10 soles simplemente jugando 10 partidas en Aviator o Spaceman y realizando 2 apuestas de 10 soles en eventos deportivos.</p>",
          "summary_image": "url_a_imagen_summary.jpg",
          "title": "Misión de Prueba",
          "body": "<p>Participa en nuestra misión de prueba y obtén una recompensa de 10 soles. ¡Cumple con los objetivos y reclama tu premio!</p>",
          "image": "aviator.jpg"
        }
      },
      {
        "mission": "MISSION_SLOTS",
        "name": "Desafío de Slots",
        "objectives": [
          {
            "objective": "OBJ_SLOTS1",
            "name": "50 Giros en Slots",
            "type": "WAGERS_COUNT",
            "amount": "50",
            "description": "Juega 50 giros en cualquier slot."
          },
          {
            "objective": "OBJ_SLOTS2",
            "name": "Gana en Slots",
            "type": "WIN_COUNT",
            "amount": "3",
            "description": "Gana en 3 juegos de slot diferentes."
          }
        ],
        "init_date": "2023-09-29 05:00:00",
        "end_date": "2023-10-29 17:43:26",
        "prize": 20,
        "cms": {
          "summary_title": "¡Gana 20 soles!",
          "summary_body": "<p>Gana 20 soles jugando 50 giros en slots y ganando en 3 juegos diferentes.</p>",
          "summary_image": "url_a_imagen_summary_slots.jpg",
          "title": "Desafío de Slots",
          "body": "<p>Participa en nuestro desafío de slots y gana 20 soles. ¡Completa los objetivos y recibe tu premio!</p>",
          "image": "ruleta.jpg"
        }
      },
      {
        "mission": "MISSION_RUCKET",
        "name": "Ruleta Épica",
        "objectives": [
          {
            "objective": "OBJ_RUCKET1",
            "name": "Juega 20 Rondas",
            "type": "WAGERS_COUNT",
            "amount": "20",
            "description": "Juega 20 rondas en la ruleta europea."
          },
          {
            "objective": "OBJ_RUCKET2",
            "name": "Apuesta Mínima",
            "type": "MIN_BET",
            "amount": "50",
            "description": "Realiza una apuesta mínima de 50 soles en la ruleta."
          }
        ],
        "init_date": "2023-10-01 05:00:00",
        "end_date": "2023-10-31 17:43:26",
        "prize": 15,
        "cms": {
          "summary_title": "¡Gana 15 soles!",
          "summary_body": "<p>Juega 20 rondas en la ruleta y realiza una apuesta mínima de 50 soles para ganar 15 soles.</p>",
          "summary_image": "/public/ruleta.jpg",
          "title": "Ruleta Épica",
          "body": "<p>Participa en nuestra Ruleta Épica y gana 15 soles. Completa los objetivos para obtener tu premio.</p>",
          
        }
      }
    ];
  
   
    const missionsContainer = document.getElementById('missions-container');
  
    missions.forEach(mission => {
     
      const card = document.createElement('div');
      card.className = 'card';
  
      const title = document.createElement('h3');
      title.innerText = mission.name;
      card.appendChild(title);
  
      const summary = document.createElement('p');
      summary.innerHTML = mission.cms.summary_body;
      card.appendChild(summary);
  
      const joinButton = document.createElement('button');
      joinButton.innerText = 'Unirse';
      joinButton.addEventListener('click', () => {
        alert('Te has unido a la misión: ' + mission.name);
      });
      card.appendChild(joinButton);
  
      const detailsButton = document.createElement('button');
      detailsButton.innerText = 'Detalles';
      detailsButton.addEventListener('click', () => {
        showMissionDetails(mission);
      });
      card.appendChild(detailsButton);
  
      missionsContainer.appendChild(card);
    });
  
    
    function showMissionDetails(mission) {
      document.getElementById('modal-title').innerText = mission.cms.title;
      document.getElementById('modal-summary').innerHTML = mission.cms.body;
      document.getElementById('modal-image').src = mission.cms.summary_image;
      
      const objectivesList = document.getElementById('modal-objectives');
      objectivesList.innerHTML = '';
      mission.objectives.forEach(obj => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${obj.name}:</strong> ${obj.description}`;
        objectivesList.appendChild(listItem);
      });
  
      document.getElementById('modal-reward').innerText = `Premio: ${mission.prize} soles`;
      document.getElementById('mission-modal').style.display = 'flex';
    }
  
  
    const closeModal = document.querySelector('.modal .close');
    closeModal.addEventListener('click', () => {
      document.getElementById('mission-modal').style.display = 'none';
    });
  
    
    window.addEventListener('click', (event) => {
      if (event.target === document.getElementById('mission-modal')) {
        document.getElementById('mission-modal').style.display = 'none';
      }
    });
  });