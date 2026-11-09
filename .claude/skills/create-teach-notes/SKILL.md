---
name: create-teach-notes
description: >
  Adds teach notes for a board game to this project: a concise, bullet-point Markdown file in src/teaches/ that is registered in src/teaches/teaches.ts. Use this skill whenever a user wants to add or write teach notes, a rules summary, or a cheat sheet for a board game. Also trigger when the user names a specific board game and asks how to explain or present it to new players. If the user uploads a PDF that appears to be a board game rulebook without stating their intent, ask if they'd like to generate teach notes from it. The skill works with or without a rulebook PDF: if a PDF is provided, treat it as the source of truth for the rules.
---

# Create Teach Notes

## Overview

This skill creates teach notes for board games — concise, bullet-point references intended for a **game teacher** explaining the rules to players who have never played before. The teach notes are not a rulebook; they assume the teacher knows the game and just needs a prompt for each rule so they don't forget anything.

## Workflow

1. **Identify the game** — If the user hasn't specified a game, ask which one.
2. **Request a rulebook PDF** — Ask the user to provide a PDF of the rulebook. Only proceed without one if the user explicitly says they don't have it. If proceeding without a rulebook, use your knowledge of the game and note any rules you're uncertain about after the notes.
3. **Write the teach notes** following the formatting and content guidelines below. Save them to `src/teaches/<teach-id>.md`, where `<teach-id>` is the game's title in kebab-case (e.g., `castles-of-burgundy.md`).
4. **Register the teach** in `src/teaches/teaches.ts`:
   - Add `import PascalCaseName from "url:./<teach-id>.md";` in alphabetical order by file name.
   - Add `{ teachId: "<teach-id>", title: "<Game Title>", notes: PascalCaseName }` to `TEACHES`, next to the entries for neighboring titles. The list is sorted by `title` at runtime, so keep the title identical to the `#` heading in the Markdown file.
5. **Report** to the user: citations (rulebook pages, BGG references, etc.) and any rules you were uncertain about. Never put these in the Markdown file.

---

## Content Guidelines

### Audience & purpose
The reader **already knows how to play the game**. The notes are a teaching checklist — a reminder not to skip a rule, not a description of how it works. Every rule should appear in some shorthand form, but details only need to be included if they're genuinely easy to forget or surprising.

### What to include
- A brief mention of **every rule** — enough to jog the teacher's memory that it exists.
- Sub-bullets only for rules that are **easy to forget or commonly misplayed** — not to explain how the rule works.
- A **Setup section only** if every player needs to make their own decision during setup (e.g., "draw 4 resource cards, keep 2"). Skip any setup step that is: handled by the teacher alone, determined randomly (e.g., choose random first player), or a one-time game-configuration decision. If setup decisions exist, place this section **last** so players make choices immediately after learning the rules.

### What to omit
- Any explanation the teacher would naturally provide verbally.
- Restating how a rule works if naming it is sufficient.
- Component summaries (what's in the box, card counts, etc.).
- Citations or uncertainty notes inside the Markdown file.
- **Solo/solitaire rules** — always omit entirely.
- Setup steps that only the teacher decides, or that are determined randomly.

### Tone & style
- **Be terse.** Prefer shorthand over full sentences. Omit articles, copulas, and filler. Example: prefer "0 mana = no special" over "Players cannot use their special abilities when they don't have any mana."
- Use standard abbreviations freely: VPs (victory points), 2P/3P/4P (player counts), TBs (tiebreakers), etc. Coin/resource shorthand is fine if obvious from context.
- Use board game jargon freely (e.g., "bury," "exhaust," "tableau," "hand limit") — brevity over grammatical completeness.
- For values that vary by player count, use slashes in ascending order. Example: "first to 50/40/30 VPs (2P/3P/4P)".
- Tiebreakers as a comma-separated list. Example: "TBs: most gold, most silver".

### Length
- Proportional to game complexity. A simple filler game might need 10–15 bullets. A heavy euro might need 50+. When in doubt, err on the side of brevity.

---

## Output Format

The Markdown file has this structure:

```
# [Game Name]

### Overview
- [ ] Theme & vibe
- [ ] Objective
- [ ] Game end condition

### [Section per major phase or concept]
- [ ] ...
  - [ ] Sub-bullet for easy-to-forget detail

### Setup (only if players make decisions)
- [ ] ...
```

The file contains only the teach notes. Do not wrap them in a code block.

---

## Example Output (for reference — do not copy verbatim)

See examples below for formatting inspiration. Match the density and structure to the complexity of the specific game.

**Simple game example (Phantom Ink: Arcana):**
```
# Phantom Ink: Arcana

### Overview
- [ ] Theme & vibe
- [ ] Teams; one Spirit per team knows the secret Object, others are Mediums
- [ ] Win: guess the Object before the other team
- [ ] Spirits answer questions one letter at a time only

### Turn
- [ ] Play arcana (optional) → ask a question or guess → draw to hand limit
- [ ] Ask: say "Silencio" to stop the Spirit mid-answer
- [ ] Eye space: ask other team to add a letter before your turn
- [ ] Arcana face-down = discard questions

### Clues
- [ ] Clue/guess complete when Spirit writes a period
- [ ] Spaces OK; no numbers or special chars
- [ ] No form of the Object in clues
```

**Heavy game example (The Castles of Burgundy):**
```
# The Castles of Burgundy

### Overview
- [ ] Theme & vibe
- [ ] Objective: most VPs
- [ ] 5 phases × 5 rounds

### Flow
- [ ] Phase: draw 5 goods → 5 rounds → income + reset tiles
- [ ] Round: assign goods tile, roll 2 dice, take actions

### Actions
- [ ] Gain tile: die = X → take tile from depot X
  - [ ] Discard storage tiles to free space
- [ ] Play tile: die = X → place tile from storage into estate space X
  - [ ] Color must match space; must be adjacent to existing tile; never removed
- [ ] Sell goods: die = X → sell all goods of value X
  - [ ] +1 silverling; +1 VP/player/tile; goods go facedown
- [ ] Hire workers: any die → +2 workers (±1 die value each; 6↔1)
- [ ] Central depot: 2 silverlings → take from center (once/turn)

### Tiles
- [ ] Animal (green): VPs per matching animal type in pasture
- [ ] Mine (grey): +1 income
- [ ] Ship (blue): take goods from any depot; advance turn order
  - [ ] Max 3 goods types; excess left behind
  - [ ] Turn order: further right = earlier
- [ ] Castle (dark green): immediate wild-die action
- [ ] Building (beige): one-time effect; 8 types; no duplicates in city
- [ ] Knowledge (yellow): special abilities + scoring; each unique

### Regions
- [ ] Complete region → VPs (size × phase)
- [ ] First to complete all of a color → bonus tile (1st: +6, 2nd: +3, 3rd+: 0)

### Scoring
- [ ] During game: Animals, Watchtower, goods sales, region completions
- [ ] End: Knowledge VPs, +1/silverling, +1/2 workers, +1/unsold goods
- [ ] TBs: fewest empty estate spaces, later turn order

### Setup
- [ ] Each player: choose starting Castle location
```
