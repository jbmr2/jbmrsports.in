# Cricket DB Module – API Documentation

Base URL: `/api` (e.g. `https://your-domain.run.app/api`)

All request/response bodies are JSON unless noted. Error responses use `{ "error": "...", "message"?: "..." }`.

---

## Health

| Method | Path | Description |
|--------|------|--------------|
| GET | `/` | Service health (root, not under /api) |

**Response (200):**
```json
{
  "status": "ok",
  "service": "crickdbmodule-api"
}
```

---

## 1. Tournaments

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/tournaments` | Create tournament |
| GET | `/api/tournaments` | List tournaments (filter by name, location) |
| GET | `/api/tournaments/:id` | Get tournament by ID |
| GET | `/api/tournaments/:tournamentId/top-performers` | Top batsmen/bowlers (query: `n`) |
| PUT | `/api/tournaments/:id` | Update tournament |
| DELETE | `/api/tournaments/:id` | Delete tournament |

### POST /api/tournaments

**Request body:**
```json
{
  "name": "IPL 2025",
  "logoUrl": "https://example.com/logo.png",
  "location": "India",
  "startDate": "2025-03-22T00:00:00.000Z",
  "endDate": "2025-05-25T00:00:00.000Z",
  "type": "T20",
  "superOver": true,
  "impactPlayerRule": true
}
```
Required: `name`. Optional: logoUrl, location, startDate, endDate, type, superOver, impactPlayerRule.

**Response (201):**
```json
{
  "id": "uuid",
  "name": "IPL 2025",
  "logoUrl": "https://example.com/logo.png",
  "location": "India",
  "startDate": "2025-03-22T00:00:00.000Z",
  "endDate": "2025-05-25T00:00:00.000Z",
  "type": "T20",
  "superOver": true,
  "impactPlayerRule": true,
  "createdAt": "2025-02-09T00:00:00.000Z",
  "updatedAt": "2025-02-09T00:00:00.000Z"
}
```

### GET /api/tournaments

**Query:** `name` (contains), `location`

**Response (200):**
```json
[
  {
    "id": "uuid",
    "name": "IPL 2025",
    "logoUrl": "https://...",
    "location": "India",
    "startDate": "2025-03-22T00:00:00.000Z",
    "endDate": "2025-05-25T00:00:00.000Z",
    "type": "T20",
    "superOver": true,
    "impactPlayerRule": true,
    "matches": [],
    "sponsors": [],
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

### GET /api/tournaments/:tournamentId/top-performers

**Query:** `n` (default 10, max 100)

**Response (200):**
```json
{
  "tournament": { "id": "...", "name": "...", "location": "...", "startDate": "...", "endDate": "..." },
  "topBatsmenByRuns": [
    { "rank": 1, "playerId": "...", "playerName": "...", "teamName": "...", "runs": 450, "innings": 14, "balls": 320, "fours": 40, "sixes": 12, "bestScore": 89, "average": 37.5, "strikeRate": 140.62 }
  ],
  "topBowlersByWickets": [
    { "rank": 1, "playerId": "...", "playerName": "...", "teamName": "...", "wickets": 24, "runsConceded": 380, "overs": 56, "maidens": 2, "bestSpell": { "wickets": 4, "runs": 20 }, "economy": 6.78, "average": 15.83 }
  ],
  "topIndividualScores": [],
  "topWicketTakers": []
}
```

---

## 2. Sponsors

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/sponsors` | Create sponsor |
| GET | `/api/sponsors` | List (query: name, website) |
| GET | `/api/sponsors/:id` | Get one |
| PUT | `/api/sponsors/:id` | Update |
| DELETE | `/api/sponsors/:id` | Delete |

### POST /api/sponsors

**Request body:**
```json
{
  "name": "Sponsor Co",
  "logoUrl": "https://example.com/logo.png",
  "website": "https://sponsor.com"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Sponsor Co",
  "logoUrl": "https://example.com/logo.png",
  "website": "https://sponsor.com",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 3. Tournament–Sponsors

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/tournament-sponsors` | Link sponsor to tournament (body: tournamentId, sponsorId, type?) |
| POST | `/api/tournament-sponsors/:tournamentId/sponsors` | Add sponsor to tournament (body: sponsorId, type?) |
| GET | `/api/tournament-sponsors` | List (query: tournamentId, sponsorId) |
| GET | `/api/tournament-sponsors/:tournamentId` | Sponsors for a tournament |
| GET | `/api/tournament-sponsors/:tournamentId/:sponsorId` | Get one link |
| PUT | `/api/tournament-sponsors/:tournamentId/:sponsorId` | Update type |
| DELETE | `/api/tournament-sponsors/:tournamentId/:sponsorId` | Remove link |

### POST /api/tournament-sponsors

**Request body:**
```json
{
  "tournamentId": "tournament-uuid",
  "sponsorId": "sponsor-uuid",
  "type": "title"
}
```

**Response (201):**
```json
{
  "tournamentId": "tournament-uuid",
  "sponsorId": "sponsor-uuid",
  "type": "title",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 4. Teams

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/teams` | Create team |
| GET | `/api/teams` | List (query: name, city) |
| GET | `/api/teams/:id` | Get one |
| PUT | `/api/teams/:id` | Update |
| DELETE | `/api/teams/:id` | Delete |

### POST /api/teams

**Request body:**
```json
{
  "name": "Mumbai Indians",
  "shortName": "MI",
  "logoUrl": "https://...",
  "themeColor": "#004BA0",
  "city": "Mumbai"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Mumbai Indians",
  "shortName": "MI",
  "logoUrl": "https://...",
  "themeColor": "#004BA0",
  "city": "Mumbai",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 5. Players

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/players` | Create player |
| GET | `/api/players` | List (query: name, role, teamId, **tournamentId** = only players not in any team for that tournament) |
| GET | `/api/players/:id` | Get one |
| PUT | `/api/players/:id` | Update |
| DELETE | `/api/players/:id` | Delete |

### POST /api/players

**Request body:**
```json
{
  "name": "Virat Kohli",
  "shortName": "VK",
  "dob": "1988-11-05",
  "gender": "male",
  "role": "batsman",
  "battingStyle": "right-hand bat",
  "bowlingStyle": "right-arm medium",
  "imageUrl": "https://...",
  "documentType": "aadhaar",
  "documentId": "xxxx-xxxx-1234",
  "countryCode": "+91",
  "mobileNumber": "9876543210"
}
```
Required: name, documentType, documentId, countryCode, mobileNumber.

**Response (201):**
```json
{
  "id": "uuid",
  "name": "Virat Kohli",
  "shortName": "VK",
  "dob": "1988-11-05T00:00:00.000Z",
  "gender": "male",
  "role": "batsman",
  "battingStyle": "right-hand bat",
  "bowlingStyle": "right-arm medium",
  "imageUrl": "https://...",
  "documentType": "aadhaar",
  "documentId": "xxxx-xxxx-1234",
  "countryCode": "+91",
  "mobileNumber": "9876543210",
  "createdAt": "...",
  "updatedAt": "..."
}
```

### GET /api/players?tournamentId=xxx

**Response (200):** Array of players; when `tournamentId` is set, only players **not** assigned to any team for that tournament.

```json
[
  {
    "id": "uuid",
    "name": "Player Name",
    "shortName": "PN",
    "teamMemberships": [],
    "playingXI": [],
    "battingStats": [],
    "bowlingStats": []
  }
]
```

---

## 6. Matches

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/matches` | Create match |
| GET | `/api/matches` | List (query: tournamentId, stage, status, team1Id, team2Id) |
| GET | `/api/matches/:id` | Get match (with innings, playingXI, stats, result) |
| GET | `/api/matches/:id/snapshot` | Match state for resume (last ball, partnership, stats) |
| GET | `/api/matches/:id/scoreboard` | Scoreboard: innings 1 & 2 runs/wickets/overs/extras, batting & bowling |
| GET | `/api/matches/:id/summary` | Top 3 batsmen & bowlers, match result |
| GET | `/api/matches/:id/fall-of-last-wicket` | Last wicket fall (query: innings) |
| GET | `/api/matches/:id/result` | Match result only |
| PUT | `/api/matches/:id` | Update match |
| DELETE | `/api/matches/:id` | Delete match |

### POST /api/matches

**Request body:**
```json
{
  "tournamentId": "uuid",
  "stage": "league",
  "group": "A",
  "team1Id": "uuid",
  "team2Id": "uuid",
  "overs": 20,
  "scheduledAt": "2025-04-10T14:30:00.000Z",
  "venue": "Wankhede",
  "status": "scheduled",
  "tossWinnerId": "uuid",
  "tossDecision": "bat",
  "firstBattingTeamId": "uuid",
  "umpire1": "Umpire One",
  "umpire2": "Umpire Two",
  "umpire3": "Third Umpire",
  "umpire4": "Fourth Umpire",
  "commentator1": "Commentator 1",
  "matchReferee": "Referee Name",
  "LiveStreamer": "Streamer Name"
}
```
Required: tournamentId, stage, team1Id, team2Id, overs, scheduledAt.

**Response (201):** Full match object (id, tournamentId, team1Id, team2Id, overs, venue, status, result: null, etc.).

### GET /api/matches?status=live

**Response (200):** Array of matches with full includes (tournament, team1, team2, tossWinner, firstBattingTeam, result, innings, playingXI, battingStats, bowlingStats).

### GET /api/matches/:id/scoreboard

**Response (200):**
```json
{
  "matchInfo": {
    "tournamentName": "IPL 2025",
    "venue": "Wankhede",
    "tossWinnerName": "Mumbai Indians",
    "tossDecision": "bat"
  },
  "innings1": {
    "runs": 185,
    "wickets": 7,
    "overs": 20,
    "totalBalls": 120,
    "extras": { "total": 12, "wd": 5, "nb": 2, "lb": 3, "b": 2 },
    "batting": { "tournamentName": "...", "venue": "...", "teamName": "MI", "players": [...] },
    "bowling": { "teamName": "CSK", "players": [...] }
  },
  "innings2": {
    "runs": 189,
    "wickets": 4,
    "overs": 19.2,
    "totalBalls": 116,
    "extras": { "total": 8, "wd": 4, "nb": 1, "lb": 2, "b": 1 },
    "batting": { ... },
    "bowling": { ... }
  }
}
```

### GET /api/matches/:id/summary

**Response (200):**
```json
{
  "matchInfo": { "tournamentName": "...", "venue": "...", "tossWinnerName": "...", "tossDecision": "bat" },
  "matchResult": {
    "winnerTeamName": "Mumbai Indians",
    "winnerTeamId": "uuid",
    "resultType": "wickets",
    "margin": 6,
    "manOfTheMatchName": "Player Name",
    "manOfTheMatchId": "uuid"
  },
  "innings1": {
    "runs": 185,
    "wickets": 7,
    "overs": 20,
    "topBatting": { "teamName": "MI", "players": [{ "playerName": "...", "runs": 65, "balls": 42, "strikeRate": "154.76", "outType": null, "bowlerName": null, "fielderName": null }] },
    "topBowling": { "teamName": "CSK", "players": [{ "playerName": "...", "overs": 4, "runsConceded": 28, "wickets": 2, "economy": "7.00" }] }
  },
  "innings2": { "runs": 189, "wickets": 4, "overs": 19.2, "topBatting": { ... }, "topBowling": { ... } }
}
```

---

## 7. Playing XI

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/playing-xi` | Set playing XI for match + team (replaces existing; max 11) |
| GET | `/api/playing-xi` | List (query: matchId, teamId) |
| GET | `/api/playing-xi/:matchId/:playerId` | Get one entry |
| PUT | `/api/playing-xi/:matchId/:playerId` | Update (isCaptain, isKeeper, etc.) |
| DELETE | `/api/playing-xi/:matchId/:playerId` | Remove player from XI |

### POST /api/playing-xi

**Request body:**
```json
{
  "matchId": "match-uuid",
  "teamId": "team-uuid",
  "players": [
    { "playerId": "player-uuid-1", "isCaptain": true, "isKeeper": true },
    { "playerId": "player-uuid-2", "isViceCaptain": true },
    { "playerId": "player-uuid-3" }
  ]
}
```
`players`: 1–11 items; each must have `playerId`; optional: isCaptain, isViceCaptain, isKeeper.

**Response (201):**
```json
{
  "set": 11,
  "matchId": "match-uuid",
  "teamId": "team-uuid",
  "players": [
    { "matchId": "...", "playerId": "...", "teamId": "...", "playingSeq": 1, "playingSeqActual": 1, "isCaptain": true, "isViceCaptain": false, "isKeeper": true }
  ]
}
```

---

## 8. Innings

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/innings` | Create innings |
| GET | `/api/innings` | List (query: matchId) |
| GET | `/api/innings/:id` | Get one |
| PUT | `/api/innings/:id` | Update |
| DELETE | `/api/innings/:id` | Delete |

### POST /api/innings

**Request body:**
```json
{
  "matchId": "match-uuid",
  "battingTeamId": "team-uuid",
  "number": 1,
  "target": 186,
  "strikerId": "player-uuid",
  "nonStrikerId": "player-uuid",
  "bowlerId": "player-uuid"
}
```
Required: matchId, battingTeamId, number. Optional: target, strikerId, nonStrikerId, bowlerId.

**Response (201):** Innings object with id, matchId, battingTeamId, number, runs: 0, wickets: 0, overs: 0, target, isCompleted, etc.

---

## 9. Balls

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/balls` | Add a ball (updates innings, batting/bowling stats, match result when innings 2 completes or chase done) |
| POST | `/api/balls/undo` | Undo last ball (body: matchId, innings?, overNumber?, ballNumber?) |
| GET | `/api/balls` | List (query: matchId, innings, wicket) |
| GET | `/api/balls/:id` | Get one ball |
| PUT | `/api/balls/:id` | Update ball |
| DELETE | `/api/balls/:id` | Delete ball |

### POST /api/balls

**Request body:**
```json
{
  "matchId": "match-uuid",
  "innings": 1,
  "overNumber": 5,
  "ballNumber": 3,
  "strikerId": "player-uuid",
  "nonStrikerId": "player-uuid",
  "bowlerId": "player-uuid",
  "batRuns": 4,
  "extraRuns": 0,
  "extraType": null,
  "LegByes": 0,
  "Byes": 0,
  "overthrowRuns": 0,
  "isLegal": true,
  "wicket": false,
  "wicketType": null,
  "dismissedPlayerId": null,
  "fielderId": null
}
```
Required: matchId, innings, strikerId, bowlerId. Optional: overNumber, ballNumber, nonStrikerId, batRuns, extraRuns, extraType (WD, NB, LB, B), LegByes, Byes, overthrowRuns, isLegal, wicket, wicketType, dismissedPlayerId, fielderId.

**Response (201):** Created ball object (id, matchId, innings, overNumber, ballNumber, strikerId, nonStrikerId, bowlerId, batRuns, extraRuns, extraType, LegByes, Byes, overthrowRuns, isLegal, wicket, wicketType, dismissedPlayerId, fielderId, createdAt, updatedAt).

### POST /api/balls/undo

**Request body:**
```json
{
  "matchId": "match-uuid",
  "innings": 2,
  "overNumber": 19,
  "ballNumber": 4
}
```
Either full ball identity or just matchId to undo last ball of match.

**Response (200):**
```json
{
  "undone": true,
  "matchId": "match-uuid",
  "innings": 2,
  "overNumber": 19,
  "ballNumber": 4
}
```

---

## 10. Batting stats

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/batting-stats` | Create (matchId, playerId, teamId?, runs, balls, fours, sixes, outType?, playingSeqActual?) |
| GET | `/api/batting-stats` | List (query: matchId, teamId, playerId) |
| GET | `/api/batting-stats/:matchId/:playerId` | Get one |
| PUT | `/api/batting-stats/:matchId/:playerId` | Update |
| DELETE | `/api/batting-stats/:matchId/:playerId` | Delete |

**Response samples:** Single batting stat object or array with `matchId`, `playerId`, `teamId`, `runs`, `balls`, `fours`, `sixes`, `outType`, `playingSeqActual`, `player`, etc.

---

## 11. Bowling stats

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/bowling-stats` | Create (matchId, playerId, teamId?, overs, runsConceded, wickets, maidens, extras) |
| GET | `/api/bowling-stats` | List (query: matchId, teamId, playerId) |
| GET | `/api/bowling-stats/:matchId/:playerId` | Get one |
| PUT | `/api/bowling-stats/:matchId/:playerId` | Update |
| DELETE | `/api/bowling-stats/:matchId/:playerId` | Delete |

**Response samples:** Bowling stat object(s) with overs, runsConceded, wickets, maidens, extras, player.

---

## 12. Upload

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/upload` | Upload image (multipart/form-data) |

### POST /api/upload

**Request:** `multipart/form-data`  
- `image`: file (required) – image file (jpeg, png, gif, webp, max 10 MB)  
- `folder`: string (optional) – e.g. `teams`, `tournaments/123`, `players`  
Query `folder` can be used instead of body.

**Response (201):**
```json
{
  "url": "https://storage.googleapis.com/crickbuck/teams/logo.png",
  "path": "teams/logo.png",
  "filename": "logo.png"
}
```

**Error (400):**
```json
{
  "error": "No image file provided. Use form field 'image'."
}
```

---

## 13. Team–players

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/team-players` | Assign players to team (body: teamId, tournamentId?, playerIds[]) |
| GET | `/api/team-players` | List (query: teamId, tournamentId, playerId) |
| GET | `/api/team-players/:id` | Get one (TeamPlayer id) |
| PUT | `/api/team-players/:id` | Update |
| DELETE | `/api/team-players/:id` | Remove assignment |

### POST /api/team-players

**Request body:**
```json
{
  "teamId": "team-uuid",
  "tournamentId": "tournament-uuid",
  "playerIds": ["player-uuid-1", "player-uuid-2", "player-uuid-3"]
}
```
Required: teamId, playerIds (non-empty array).

**Response (201):**
```json
{
  "assigned": 3,
  "teamId": "team-uuid",
  "tournamentId": "tournament-uuid",
  "playerIds": ["player-uuid-1", "player-uuid-2", "player-uuid-3"]
}
```

---

## 14. Player profiles

| Method | Path | Description |
|--------|------|--------------|
| GET | `/api/player-profiles` | Batting or bowling profile for a player in a match or tournament |

### GET /api/player-profiles

**Query:**  
- `playerId` (required)  
- `type` (required): `bat` \| `ball`  
- `category` (required): `match` \| `tournament`  
- `matchId` (required when category=match)  
- `tournamentId` (required when category=tournament)

**Example:** `GET /api/player-profiles?playerId=xxx&type=bat&category=match&matchId=yyy`

**Response (200) – batting match:**
```json
{
  "profile": "batting",
  "category": "match",
  "playerId": "...",
  "matchId": "...",
  "player": { "id": "...", "name": "...", "shortName": "...", "role": "...", "battingStyle": "...", "imageUrl": "..." },
  "playerImageUrl": "https://...",
  "match": { "id": "...", "stage": "...", "venue": "...", "scheduledAt": "...", "tournament": { "name": "..." } },
  "team": { "id": "...", "name": "...", "shortName": "...", "logoUrl": "..." },
  "runs": 65,
  "balls": 42,
  "fours": 8,
  "sixes": 2,
  "outType": "caught",
  "strikeRate": 154.76,
  "fifty": 1,
  "hundred": 0
}
```

---

## 15. Highlight videos

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/highlight-videos` | Create (type, url, title?, description?, matchId?, tournamentId?, playerId?, sortOrder?) |
| GET | `/api/highlight-videos` | List (query: type, matchId, tournamentId, playerId) |
| GET | `/api/highlight-videos/:id` | Get one |
| PUT | `/api/highlight-videos/:id` | Update |
| DELETE | `/api/highlight-videos/:id` | Delete |

**Types:** `match_highlight`, `player_highlight`, `sixes`, `wicket`, `wicket_bowler`, `catch`

### POST /api/highlight-videos

**Request body:**
```json
{
  "type": "match_highlight",
  "url": "https://youtube.com/watch?v=xxx",
  "title": "MI vs CSK Full Highlights",
  "description": "IPL 2025 Match 10",
  "matchId": "match-uuid",
  "tournamentId": "tournament-uuid",
  "playerId": null,
  "sortOrder": 0
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "type": "match_highlight",
  "url": "https://youtube.com/watch?v=xxx",
  "title": "MI vs CSK Full Highlights",
  "description": "IPL 2025 Match 10",
  "matchId": "match-uuid",
  "tournamentId": "tournament-uuid",
  "playerId": null,
  "sortOrder": 0,
  "match": { "id": "...", "venue": "...", "scheduledAt": "...", "team1Id": "...", "team2Id": "..." },
  "tournament": { "id": "...", "name": "..." },
  "player": null,
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 16. Users (platform)

| Method | Path | Description |
|--------|------|--------------|
| POST | `/api/users` | Create user (unique email & contactNumber) |
| GET | `/api/users` | List (query: role, email, contactNumber) |
| GET | `/api/users/:id` | Get one |
| PUT | `/api/users/:id` | Update |
| DELETE | `/api/users/:id` | Delete |

**Roles:** `broadcaster`, `admin`, `umpire`, `commentator`, `referee`, `player`

### POST /api/users

**Request body:**
```json
{
  "role": "umpire",
  "email": "umpire@example.com",
  "contactNumber": "+919876543210",
  "name": "John Umpire",
  "lastLoginAt": null,
  "playerId": null
}
```
Required: role, email, contactNumber. Optional: name, lastLoginAt, playerId (when role=player).

**Response (201):**
```json
{
  "id": "uuid",
  "role": "umpire",
  "email": "umpire@example.com",
  "contactNumber": "+919876543210",
  "name": "John Umpire",
  "lastLoginAt": null,
  "playerId": null,
  "player": null,
  "createdAt": "...",
  "updatedAt": "..."
}
```

**Error (409) – duplicate email/contact:**
```json
{
  "error": "Email already in use",
  "field": "email"
}
```
or
```json
{
  "error": "Contact number already in use",
  "field": "contactNumber"
}
```

---

## Common error responses

| Status | Meaning | Example body |
|--------|--------|---------------|
| 400 | Bad request / validation | `{ "error": "Missing required fields", "required": ["name"] }` |
| 404 | Not found | `{ "error": "Player not found" }` |
| 409 | Conflict (e.g. duplicate) | `{ "error": "Email already in use", "field": "email" }` |
| 500 | Server error | `{ "error": "Failed to create match", "message": "..." }` |

All error responses may include a `message` field with details. 500 may include `code` (e.g. Prisma error code) and in non-production, `stack`.
