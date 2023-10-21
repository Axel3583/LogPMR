
export type City = {
  name: string,
  latitude: number,
  longitude: number
}

export default (): City[] => {
  return [
      { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
      { name: "Marseille", latitude: 43.2965, longitude: 5.3698 },
      { name: "Lyon", latitude: 45.75, longitude: 4.85 },
      { name: "Toulouse", latitude: 43.6043, longitude: 1.4437 },
      { name: "Nice", latitude: 43.7102, longitude: 7.2620 },
      { name: "Nantes", latitude: 47.2184, longitude: -1.5536 },
      { name: "Strasbourg", latitude: 48.5734, longitude: 7.7521 },
      { name: "Montpellier", latitude: 43.6108, longitude: 3.8767 },
      { name: "Bordeaux", latitude: 44.8378, longitude: -0.5792 },
      { name: "Lille", latitude: 50.6292, longitude: 3.0573 },
  ]
     
} 