const playerClasses = ['Fighter', 'Amazon', 'Dwarf', 'Elf', 'Wizard', 'Sorceress']

const commonSkills = {
    "commonSkills": [
      {
        "id": "slide_attack",
        "name": "Slide Attack",
        "group": "Common",
        "maxLevel": 5,
        "spCost": [1, 1, 1, 1, 1],
        "reqLevel": 1,
        "reqGLv": 0,
        "effects": [
          {
            "level": 1,
            "description": "Increased chance of taking enemy down when sliding",
            "initialEffect": "Power: 30 Knockback +30%"
          }
          // ... other levels if the effects change with level
        ]
      },
      // ... other common skills
      {
        "id": "deep_pockets",
        "name": "Deep Pockets",
        "group": "Common",
        "maxLevel": 3,
        "spCost": [2, 2, 2],
        "reqLevel": 15,
        "reqGLv": 0,
        "effects": [
          {
            "level": 1,
            "description": "Increases the number of item slots in Bags.",
            "initialEffect": "Number of Bag slots: 8"
          }
          // ... other levels if the effects change with level
        ]
      }
    ]
}
  

const wizardSkills = [

]