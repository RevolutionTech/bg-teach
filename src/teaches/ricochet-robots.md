# Ricochet Robots

### Overview
- [ ] Frantic spatial puzzle
- [ ] Objective: collect the most target chips
- [ ] Game end: 8/6/5 chips (2p/3p/4p); 5+ players, play until all chips claimed

### The Board
- [ ] 16×16 grid with walls on cell edges — walls block movement
- [ ] Board edges and center block movement too
- [ ] 4 colored robots start anywhere not on a target space

### Robot Movement
- [ ] Robots slide in a straight line until hitting a wall, robot, or board edge — no stopping mid-cell
- [ ] Each slide (regardless of distance) = 1 move
- [ ] Any robot can be moved, not just the target robot
  - [ ] Moves of helper robots count toward your total
- [ ] **Must ricochet at least once** — if a robot can reach the target in a straight line, that solution is illegal; take another route
- [ ] A robot can "wait" (stop at an obstacle) while others move, then continue later — counts separately

### Colored Barriers (optional boards)
- [ ] Diagonal barriers on some board sections
- [ ] A robot matching the barrier's color passes through it freely
- [ ] Other-colored robots bounce off at 90°
- [ ] Robots cannot stop on a barrier space — must continue to the next obstacle
- [ ] A move that would end on a barrier space (due to adjacent obstacle) is not legal

### Round
- [ ] Flip one target chip onto the centerpiece
- [ ] Colored chip: that color's robot must reach the target
- [ ] Multicolored vortex: any robot can be used
- [ ] All players mentally solve simultaneously — no touching robots yet

### Bidding
- [ ] Call out your move count when you have a solution (e.g., "5!")
- [ ] First bidder flips the sand timer — ~1 minute for others to bid
- [ ] Others can bid same, lower, or higher
- [ ] You can improve (lower) your own bid, but never raise it

### Verifying
- [ ] Lowest bidder goes first after timer runs out
- [ ] Physically move the robots, count aloud
- [ ] Succeed in ≤ your bid → take the chip
- [ ] Fail → reset robots to position markers; next-lowest bidder tries
- [ ] If nobody succeeds → shuffle chip back facedown into the stack
- [ ] After the round, update position markers to robots' new positions

### Timing Out
- [ ] If nobody bids after 4–5 min, flip the timer as a nudge
- [ ] Still no bid when it runs out → reshuffle chip, reveal a new one

### Black Robot Variant
- [ ] Add the black robot; works like any other robot
- [ ] Can be moved to the vortex target like any other robot
