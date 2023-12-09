import { useState } from "react"

export const FormationsInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [formations, setFormations] = useState('');

  return (
    <div className="pb-5">
      <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"Tactics"} onChange={(e) => {
        setFormations(e.target.value);
        setShowInfo(false);
      }}>
        <option value={"Tactics"} disabled>Tactics</option>
        <option>4-4-2</option>
        <option>4-4-1-1</option>
        <option>4-4-2 diamond</option>
        <option>4-3-3</option>
        <option>4-3-2-1</option>
        <option>4-2-3-1</option>
        <option>4-5-1</option>
        <option>3-4-3</option>
        <option>3-5-2</option>
        <option>3-2-4-1</option>
      </select>
      <button className="btn btn-outline" onClick={() => showInfo ? setShowInfo(false) : setShowInfo(true)}>{`${showInfo ? 'Hide' : 'Show'} formation info`}</button>
      {showInfo && formations === '4-4-2' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-4-2</p>
          <p className="text-xl mt-1">4-4-2 is the perfect counter-attacking formation, as it has the potential for an intensive press and easy transition after the ball is won. Making use of two hardworking wingers, or midfielders in this case, the 4-4-2 is a
            swashbuckling formation which our formation creator allows you to simulate.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>The 4-4-2 is built for the counter-attack, evidenced by the fact that most of the great counter-attacking teams in contemporary football use it.</li>
            <li>As the 4-4-2 makes use of two attackers – usually two Center Forwards, defending against it is particularly hard. Using two attackers means there’s a perpetual threat of having the opposition centre-backs in 1-v-1 situations,
              a situation which favours the attacker more often than not. This forces either one of the fullbacks or a midfielder to drop in and help out in defence, effectively creating more space for the team using the 4-4-2 to operate in.</li>
            <li>The 4-4-2, when effectively used, can be one of the most defensive formations. The four defenders and midfielders can line up in two walls, one in front of the 18-yard box, and another in just before the half-way line,
              a tactic famously known as Two Banks of Four.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The greatest weakness of the 4-4-2 is the lack of control over the game, except in exceptional cases. Modern football has adapted spectacularly to the 4-4-2 by doing something simple — playing a three-man midfield.
              The 4-4-2, by default, makes use of two central midfielders who, almost always, cannot take control of the midfield area from a three-man midfield.</li>
            <li>In an attempt to ensure that having an extra man committed to attack doesn’t leave the team defensively unbalanced, players in a 4-4-2 are usually the most hard working. The wide midfielders, especially, are required to always help out in defence, and one of the strikers is
              generally requested to assist in the press. This, while, effectively compensating for extra attacking flair, is strenuous to the players, and a decline in stamina may be noticed as the game wears down.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>Playing against a possession-based team.</li>
            <li>The opponent has a significantly more star-studded team, and attempting to go toe-to-toe against them would be useless.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-4-2 diamond' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-4-2 Diamond</p>
          <p className="text-xl mt-1">A narrow formation, the Diamond forgoes the use of wingers or even wide midfielders, and opts for four central midfielders, a tactic that may yield results ranging from overwhelmingly oppressing to laughably ridiculous.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>By having a dedicated defensive midfielder, the Diamond sacrifices some attacking potential to ensure defensive stability.This extra man, the destroyer, can easily step back into defence to act as the fifth defender if the team is under pressure.</li>
            <li>By having four midfielders packed into the middle of the pitch, the Diamond gives an edge over most other formations by having an extra man.
              The four midfielders ensure that there is no space for the opposition to string together passes in the build-up, ultimately leaving them with one option — the long ball.</li>
            <li>Having an extra midfielder gives the team a special channel for creating attacks. When utilised properly, this can lead to attacking football with devastating effects.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The Diamond is a very narrow formation due to the lack of advanced wide players. This means that the flanks can only be used during attacks by either a drifting center forward or midfielder, or a fullback. 
              The first option reduces the potency of the attack by a great margin, so fullbacks are the only viable option.</li>
            <li>When the fullbacks go on the overlap to compensate for a lack of wide attacking players, the backline is left exposed to a potential counterattack. This is slightly mitigated by the defensive midfielder 
              who sits back, but even a 3-v-3 counterattacking situation can easily go bad for the defending team.</li>
            <li>The Diamond requires extremely fit central midfielders to cover ground, and fullbacks who can bomb up and down the pitch with ease. This may put a strain on the players, 
              resulting in a possible decrease in efficiency over the course of the game or season.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The Diamond is mostly used by teams that lack natural wide players, who choose to have most of their plays go through the middle rather than use a potentially unproductive wide man.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-2-3-1' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-2-3-1</p>
          <p className="text-xl mt-1">The 4-2-3-1 formation operates with four lines. In defence, there is a back four consisting of two central defenders and two full-backs. 
            Two deeper central midfielders operate ahead of the back line and are often referred to as a double pivot. Further forward, an attacking midfield three play behind a lone centre-forward. </p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>The 4-2-3-1 makes use of four attacking players with the box-to-box having the potential to be the fifth. This means that in a counterattacking situation, the team playing the 4-2-3-1 will almost always have the numerical advantage.</li>
            <li>This formations boasts of a rather impressive ease of transition. While as many as five players can be dedicated to the attack, that number can just as easily change to six in defence. 
              This fluidity in transition is what makes it so popular, as it is less susceptible to the threat of a counterattack.
              The four midfielders ensure that there is no space for the opposition to string together passes in the build-up, ultimately leaving them with one option — the long ball.</li>
            <li>The 4-2-3-1 is well balanced, having the potential for great attacking football or a masterpiece defensive performance depending on the manager’s game plan.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The midfield of the 4-2-3-1 requires incredible specific personnel. The central defensive midfielder position, for example, requires a great passing range, decent athleticism, and a good footballing brain. 
              The box-to-box midfield position requires stamina, good passing, and shot technique. If these requirements are not met, the 4-2-3-1 loses the balance which makes it so impressive.</li>
            <li>The single centre-forward can be isolated. They are always underloaded against opposing centre-backs, and the use of a double pivot means it can take longer for others to push forward and support attacks.</li>
            <li>The central midfield three can be overloaded by a four – a 4-4-2 diamond, for example. If the number 10 stays too high when defending, an opposing midfield three can overload the double pivot.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>Anytime. The 4-2-3-1 is so popular because of its utility value.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '3-5-2' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">3-5-2</p>
          <p className="text-xl mt-1">The 3-5-2 has two particular traits that separate it from all other football formations: a 3-man defence, and the use of wingbacks. The 3-5-2, which you can create with our lineup builder, 
          works fundamentally on the premise of two wingbacks on either flank, players who would be generic fullbacks in any other formation, stepping up the pitch to act as wide midfielders, not entirely removed from the concept of wide midfielders. </p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>As most teams are built to play against standard four-man defences, having a three man defence can be a rather shocking prospect for the opposition team. Teams that play with the 4-4-2 are particularly susceptible to this, 
              as having two central Midfielders playing against a potential five is quite simply overwhelming.</li>
            <li>Playing five Midfielders can border on the unfair. This is not usually the case, however, as the 3-5-2 was ideally designed to work with three central midfielders; in specific situations, though, 
              the 3-5-2 can easily transform to a four-man midfield, with the ball-playing central defender acting as a deep lying playmaker.</li>
            <li>Two centre-forwards can constantly occupy both opposing centre-backs in a back four. High wing-backs and one or two attacking midfielders can mean extra numbers in the final third, and a strong attacking threat.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The wing-backs are required to be more versatile and well-rounded players than either full-back or wingers in back-four systems, as they are needed almost constantly at both ends of the pitch. 
              They also need to be extremely fit to cover a vast amount of ground.</li>
            <li>With the wing-backs often on their own out wide, it is difficult to create wide overloads in possession. It is also easier for opponents to isolate them in the defensive phase. If another player gets across to help the wing-back, 
              that creates a gap elsewhere in the structure.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 3-5-2 is particularly effective against attacking teams; its ability to transform easily into a defensive 5-3-2 makes it the perfect formation for a team willing to sit back and hit on the break. 
              It may also be used when there’s a surplus of overly attacking fullbacks who the coach cannot depend on entirely to handle all defensive responsibilities.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-3-3' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-3-3</p>
          <p className="text-xl mt-1">Used by some of the greatest teams in footballing history, the 4-3-3 finds its most significant root in the Dutch style, the Total Football. A philosophy which emphasises fluidity and flexibility among outfield players, 
          Total Football became synonymous with the 4-3-3. Making use of either a dedicated defensive midfielder and two slightly ahead of him, or two defensively oriented midfielders and an attacking one ahead of them, two wide forwards, and 
          a dedicated Centre Forward, the 4-3-3, when used properly, makes a compelling case for being the most devastating formation in football. </p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>The main strength of a 4-3-3 is the presence of a third player in central midfield, which creates a numerical overload when up against a team playing with two. This helps in build-up, playing through the lines, 
              creating chances and overall domination of possession. The basic shape of a 4-3-3 tends to create more triangles between players, and so more passing lanes are open to the ball-carrier. This, in theory at least, makes it easier to play a possession-based game.</li>
            <li>In attack, wide wingers flanking a single centre-forward can be enough to pin four defenders back. This creates an overload elsewhere on the pitch and should, in theory, make it easier to progress up the pitch.</li>
            <li>Defensively, the 4-3-3 provides numbers and compactness in central areas. A staggered midfield shape – often a single pivot behind two number eights – makes it easier to defend the space between the defensive and midfield lines. 
              It is easier to press high up the pitch, meanwhile, with three players in the front line rather than two.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The main weakness of a 4-3-3 is that the single centre-forward can be left isolated, and is naturally underloaded whether playing against two or three centre-backs. 
              This means you need a player in this position who is willing to do lots of work that may bring little or no reward. They also need to be strong and good enough on the ball to hold off several defenders.</li>
            <li>The three central midfielders can end up numerically overloaded against four central players – for example, in a 4-4-2 diamond. The central midfielders can also end up with a lot of ground to cover. 
              If they don’t get across the pitch following a switch of play, the full-backs can be left exposed and isolated with no wide midfielder ahead of them, and the winger usually high up the pitch. 
              Opponents can also target wide areas on the counter-attack, particularly if a full-back has pushed up.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 4-3-3 is mostly used by possession-based teams with technical midfielders. As such, the 4-3-3 can be used when winning a midfield battle is paramount in winning the game.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '3-4-3' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">3-4-3</p>
          <p className="text-xl mt-1">The 3-4-3 formation uses 3 central defenders, a double pivot in the center of midfield, two wide midfielders or wing-backs, and a front line of 3 attacking players. 
          This shape offers balance across the pitch and the flexibility for coaches to emphasize various different strategies. </p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>If the two wide players in the front three play as wide number 10s, they can drop into midfield to create a box or diamond structure that creates overloads in central midfield. 
              The presence of two number 10s adds another threat between the lines, which can occupy both players in a double pivot or drag a centre-back out if up against a single pivot.</li>
            <li>A wider front three can also pin a back four, which creates an overload elsewhere on the pitch. A wider front line can also create overloads along with an advancing wing-back.</li>
            <li>Out of possession, the back line can quickly change from a three to a five via the wing-backs withdrawing, adding extra presence in the back line. A narrow front three can block central access even more effectively than a pair of centre-forwards. 
              They can also initiate a high press effectively.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The wing-backs are required to be more versatile and well-rounded players than either full-back or wingers in back-four systems, as they are needed almost constantly at both ends of the pitch. 
              They also need to be extremely fit to cover a vast amount of ground.</li>
            <li>If the opposition builds through the inside channels, the wider centre-backs can be drawn out of position, leaving gaps for penetrative runs in behind.
                Once the wide forwards move forward, there is less presence in midfield. As a result, there are fewer players able to support the wing-backs if they are isolated.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 3-4-3 is a great option for pressing in midfield and steering the opposition towards the center, which with four players there can often lead to gaining possession. 
              This requires isolating the opposing fullbacks and blocking off the ability to pass the ball out wide.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-4-1-1' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-4-1-1</p>
          <p className="text-xl mt-1">The 4-4-1-1 formation is a versatile and dynamic setting that can be used to create a strong defensive structure while still providing ample attacking opportunities. The formation features four defenders, four midfielders, 
          one attacking midfielder, and one forward, making it a balanced formation that can adapt to a range of playing styles.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>The formation provides a solid defensive structure with four defenders, four midfielders, and one striker dropping back to defend. This can make it difficult for the opposition to break through and create scoring opportunities.</li>
            <li>The 4-4-1-1 allows for quick counter-attacks, with the striker and attacking midfielder able to link up and quickly move the ball forward. It's a flexible formation that can adapt to different situations. 
              It can be used to control possession, dominate the midfield, or sit back and defend.</li>
            <li>The formation allows for good midfield control, with four midfielders who can control the game and dictate the tempo. This can be particularly effective against teams that rely heavily on their midfield.</li>
            <li>The attacking midfielder can provide support to the striker and create scoring opportunities, while the four midfielders can provide additional support in attack.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The formation relies heavily on the four midfielders to provide width in attack, which can make it vulnerable to teams that defend well in the center of the pitch and force the play wide.</li>
            <li>The formation relies heavily on the attacking midfielder to link up with the striker and create scoring opportunities. If the attacking midfielder is not performing well, the team can struggle to create chances.</li>
            <li>With only one striker, the formation can leave the striker isolated and unsupported if the attacking midfielder and midfielders are not providing enough support. Vulnerability to counter-attacks: The formation can be vulnerable to counter-attacks, 
              especially if the midfielders and full-backs push up too high and leave space behind them.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 4-4-1-1 can be used in both attacking and defensive strategies depending on the team's tactics and the style of play.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-3-2-1' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-3-2-1</p>
          <p className="text-xl mt-1">The 4-3-2-1 formation, also known as the "Christmas Tree" formation due to its shape on the field, is a variation of the popular 4-3-3 formation. 
          This formation is known for its attacking prowess and ability to create numerous scoring opportunities. The 4-3-2-1 formation is generally considered to be an attacking formation. It emphasizes creativity and scoring goals, with 
          two attacking midfielders positioned just behind a lone striker.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>With two attacking midfielders and a lone striker, this formation is known for its attacking prowess and ability to create numerous scoring opportunities.</li>
            <li>The formation allows for flexibility in attack, with the attacking midfielders given the freedom to roam and create space for the striker.</li>
            <li>The defensive midfielder provides added protection for the defense, making it harder for the opposition to break through.</li>
            <li>The midfield trio is well-equipped to dominate possession and control the center of the pitch, making it difficult for the opposition to get a foothold in the game.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>With only two midfielders providing cover for the fullbacks, the opposition can exploit the space on the wings and create scoring opportunities.</li>
            <li>The attacking midfielders tend to play narrow, which can make it difficult to create space on the wings and provide crosses for the striker.</li>
            <li>Opponents playing with a three-man midfield can potentially outnumber the 4-3-2-1 formation's midfield trio, making it difficult to maintain control of the center of the pitch.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 4-3-2-1 can be put to good use when the objective is to control midfield through the defense. It’s incredibly hard for an opponent to get through against five central midfielders if all of the players are in their positions.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '4-5-1' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">4-5-1</p>
          <p className="text-xl mt-1">The 4-5-1 formation has a back line of four defenders – two centre-backs and two full-backs. Ahead, five players comprise the midfield unit, with three central midfielders and two wider midfielders. A lone centre-forward operates as the highest player in the structure.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>The 4-5-1 provides central compactness, with numbers, balance and cover. This maked it difficult for the opposition to progress through the middle of the pitch. It makes for a very effective low or mid-block, 
              but can quickly and efficiently create higher pressing.</li>
            <li>With the central-midfield trio’s compactness, wingers can track opposing full-back runs and stop overloads in the wide areas. Numbers in the central spaces can deal with subsequent crosses and cut-backs.</li>
            <li>When starting in a 4-5-1, a single quick movement can lead to a different shape, allowing for fluidity and versatility. For example, one of the number eights can move higher to form a 4-4-2, 
              or the deepest central midfielder can drop into a single pivot position, creating a 4-3-3. A double pivot can also form in a 4-2-3-1.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>The 4-5-1 is predominantly a defensive structure, or a base from which to instigate counter-attacking moments. Due to the flatness of the midfield unit, it can be harder to dominate the ball. 
              When trying to play across the pitch, or switch the play with shorter passes, the midfield has to reorganise, often staggering into different lines. As this occurs, teams must be able to pass and receive, potentially under pressure.</li>
            <li>Wingers’ counter-attacking output can be reduced, due to working back to help full-backs. The single central forward, meanwhile, can be isolated and easily overloaded when trying to begin a counter-attack. 
              This is especially the case with direct, forward passes. Early support runs are therefore needed, but this can lead to less defensive compactness.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 4-5-1 predominantly features when a team is defending. In possession, it will usually convert into a 4-1-4-1 or a 4-3-3 for a solid attack.</li>
          </ul>
        </div>
      </div>}

      {showInfo && formations === '3-2-4-1' && <div className="flex justify-around">
        <div className="w-1/5">
          <p className="text-3xl bold">3-2-4-1</p>
          <p className="text-xl mt-1">The 3-2-4-1 formation, also known as the “Christmas Tree” formation, is characterised by three central defenders, a double pivot in midfield, four attacking midfielders, and a lone striker. This shape allows for fluid movement, versatility, and effective ball circulation. Pep was already onto a winning formula for the Premier League, but he never stops innovating. 
            His genius saw them topple a mighty Arsenal, winning the league by eight points in the end.</p>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Strengths</p>
          <ul className="list-disc">
            <li>One of the main strengths of the 3-2-4-1 formation is its compactness and numerical superiority in midfield. With two holding midfielders and four attacking midfielders, this formation allows for quick passing triangles and possession retention, making it difficult for the opposition to win the ball back. 
              This also allows for versatility in transitions, as the team can quickly move from defense to attack with ease.</li>
            <li>Another strength of this formation is its width, which is provided by the attacking midfielders. This allows for the team to stretch the opposition’s defense and create space for attacking runs. 
              The attacking midfielders can also drop back to provide defensive support, ensuring that the team maintains its defensive solidity.</li>
              <li>The 3-2-4-1 formation also provides a good balance between defense and attack, with three central defenders providing a solid defensive structure while the attacking midfielders support the lone striker in attack. 
                This balance allows for the team to press high up the pitch while also maintaining a strong defensive line.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">Weaknesses</p>
          <ul className="list-disc">
            <li>One of the main weaknesses of the 3-2-4-1 is its lack of width. With only two wide players in the midfield, it can be difficult to stretch the opposition and create space on the flanks. 
              This can make it easier for the opposition to defend against our attacks and limit our options going forward.</li>
            <li>Another weakness is the vulnerability to a low block. If the opposition sits deep and defends in numbers, it can be tough to break them down with only one striker and four attacking midfielders. 
              We may find ourselves struggling to penetrate the opposition’s defense and create clear-cut chances.</li>
              <li>Additionally, the 3-2-4-1 can be tough to defend with, particularly against teams that play with wingers or full-backs who like to overlap. With only two central midfielders, 
                we may find ourselves outnumbered in the middle of the park, leaving our defense exposed to counter-attacks.</li>
          </ul>
        </div>
        <div className="w-1/5">
          <p className="text-3xl bold">When to be used</p>
          <ul className="list-disc">
            <li>The 3-2-4-1 formation is a highly effective strategy for teams looking to dominate possession and maintain a strong defensive structure.</li>
          </ul>
        </div>
      </div>}
    </div>
  )
}