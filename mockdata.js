// Mock Seismic Telemetry Data

export const mockEarthquakes = [
  {
    id: "eq-2026-001",
    location: "Honshu, Japan",
    magnitude: 7.4,
    depth: 24,
    time: "2026-05-29T14:24:00Z",
    severity: "critical",
    region: "Asia-Pacific"
  },
   {
    id: "eq-2026-002",
    location: "Northern California, USA",
    magnitude: 4.8,
    depth: 8,
    time: "2026-05-29T13:10:15Z",
    severity: "moderate",
    region: "Americas"
  },
  {
    id: "eq-2026-003",
    location: "Valparaiso, Chile",
    magnitude: 6.2,
    depth: 35,
    time: "2026-05-29T11:45:30Z",
    severity: "major",
    region: "Americas"
  },
  {
    id: "eq-2026-004",
    location: "Aegean Sea, Greece",
    magnitude: 5.1,
    depth: 12,
    time: "2026-05-29T09:05:00Z",
    severity: "moderate",
    region: "Europe/Africa"
  },
  {
    id: "eq-2026-005",
    location: "Mindanao, Philippines",
    magnitude: 6.8,
    depth: 58,
    time: "2026-05-29T07:30:00Z",
    severity: "major",
    region: "Asia-Pacific"
  },
  {
    id: "eq-2026-006",
    location: "Kermadec Islands, New Zealand",
    magnitude: 5.9,
    depth: 110,
    time: "2026-05-29T04:12:10Z",
    severity: "major",
    region: "Oceania"
  },
  {
    id: "eq-2026-007",
    location: "Reykjanes Ridge, Iceland",
    magnitude: 4.2,
    depth: 10,
    time: "2026-05-29T02:50:00Z",
    severity: "minor",
    region: "Europe/Africa"
  },
  {
    id: "eq-2026-008",
    location: "Hindu Kush, Afghanistan",
    magnitude: 5.5,
    depth: 210,
    time: "2026-05-28T23:18:45Z",
    severity: "moderate",
    region: "Asia-Pacific"
  },
  {
    id: "eq-2026-009",
    location: "Banda Sea, Indonesia",
    magnitude: 6.0,
    depth: 140,
    time: "2026-05-28T21:05:00Z",
    severity: "major",
    region: "Asia-Pacific"
  },
  {
    id: "eq-2026-010",
    location: "Anchorage, Alaska, USA",
    magnitude: 3.9,
    depth: 42,
    time: "2026-05-28T18:40:00Z",
    severity: "minor",
    region: "Americas"
  },
  {
    id: "eq-2026-011",
    location: "Sichuan, China",
    magnitude: 5.8,
    depth: 15,
    time: "2026-05-28T15:20:30Z",
    severity: "major",
    region: "Asia-Pacific"
  },
  {
    id: "eq-2026-012",
    location: "Pacific-Antarctic Ridge",
    magnitude: 4.5,
    depth: 10,
    time: "2026-05-28T12:05:00Z",
    severity: "minor",
    region: "Oceania"
  }
 ];
export const getSeverityColor = (severity) => {
  switch (severity) {
    case 'critical':
      return 'text-red-400 border-red-500 bg-red-950/20';
    case 'major':
      return 'text-orange-400 border-orange-500 bg-orange-950/20';
    case 'moderate':
      return 'text-yellow-400 border-yellow-500 bg-yellow-950/20';
    case 'minor':
    default:
      return 'text-cyan-400 border-cyan-500 bg-cyan-950/20';
  }
};

