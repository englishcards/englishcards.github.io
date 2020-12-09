const unitAll = [
{
	unit: 'Unit-1',
	gramar: `<h2 class="main-title">Present Simple (to be)</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> am/are/is <span>+</span> object<br>
						<p class="example-item example-item_main">He is a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">I am a student</li>
							<li class="example-item">They are students</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> am/are/is <span>+</span> not <span>+</span> object<br>
						<p class="example-item example-item_main">She is not a doctor<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">I am not a doctor </li>
							<li class="example-item">We are not doctors</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Am/are/is <span>+</span> Subject <span>+</span> object?<br>
						<p class="example-item example-item_main">Is he a taxi-driver?<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">Am I a taxi-driver?</li>
							<li class="example-item">Are they taxi-drivers?</li>
						</ul>
					</li>
				</ul>
				<h2 class="main-title">Present Simple (verbs)</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> verb <span>+</span> object<br>
						<p class="example-item example-item_main">We watch TV in the evening<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">I work every day</li>
							<li class="example-item">She starts work at 9 o'clock</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> do/does <span>+</span> not <span>+</span> object<br>
						<p class="example-item example-item_main">I don't drink milk<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">They don't read books</li>
							<li class="example-item">He doesn't drive a car</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Do/Does <span>+</span> Subject <span>+</span> object?<br>
						<p class="example-item example-item_main">Do you like listening to music?<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">Do they live in Scotland?</li>
							<li class="example-item">Does she work at the weekend?</li>
						</ul>
					</li>
				</ul>`,
	words: `Another file`,			
	text: `<h2 class="main-title text-title">Shops in my city</h2>
				<p class="text-paragraph">Hi! My name is Roberto. I live in Barcelona and I love my city very much. It is big, so you can buy many good things.<img src="units/1/text/unit_1.jpg" style="float: right; width:180px;"></p>
				<p class="text-paragraph">I would like to tell you about shops on my street Carrer de Fortuna. There are baker’s, butcher’s and greengrocer’s on that street. Every morning my mother sends me to the baker’s. There is very tasty bread. In the greengrocer’s you can always buy fresh apples and vegetables. It is opposite baker’s. There are apples, bananas, potatoes, tomatoes in the greengrocer’s. In the butcher’s you can buy meat. The butcher’s is on the left of greengrocer’s.</p>
				<p class="text-paragraph">My street is small, so I can’t buy clothes here. At the weekend our family goes to the down town. There are shoe shops, clothes shops and sports shops in my city. You can buy sweater, shoes, hat, jacket, trousers, shirt, T-shirt. Those are great places.</p>
				<p class="text-paragraph">I like my city and I like shopping very much.</p>`,
	practice: `<div class="practice-wrap">
					<div class="practice-wrap-temp">
						<h2 class="main-title practice__title">Choose a category</h2>
						<div class="practice-category">
							<h3 class="practice-category__title">Test</h3>
						</div>
						<div class="practice-category">
							<h3 class="practice-category__title">Exercise</h3>
						</div>
					</div>	
					<div class="practice-test" hidden>
						<span class="count-question"></span>
						<p class="practice-test__text"></p>
						<ul class="practice-test-list">
							<li class="practice-test-item"></li>
							<li class="practice-test-item"></li>
							<li class="practice-test-item"></li>
						</ul>
						<button class="practice-test__btn">Next</button>
					</div>
					<div class="practice-exercise" hidden>
						<span class="count-question-exercise"></span>
						<span class="practice-exercise__mark" hidden></span>
						<p class="practice-exercise__text"></p>
						<div class="words-btn-wrap">
							<button class="practice-test__btn practice-test__btn_check">Check</button>
							<button class="practice-test__btn practice-test__btn_next">Next</button>
						</div>
					</div>
				</div>`,
	listening: `<div class="listening-wrap">
					<div class="track-list">
						<h2 class="main-title track-list_header">Track-1</h2>
					</div>
					<div class="dialogue">
						<img src="units/1/audio/1.jpg">
					</div>
					<div class="audio-player-wrap">
						<audio class="audio-player"></audio>
						<progress class="listening__progress" value="0" max="100"></progress>
						<span class="listening__current-time"></span>
						<span class="listening__duration">0:00</span>
						<input class="listening__volume" type="range"  min="0" max="100">
						<span class="listening__text">Hide Text</span>
						<button class="listening__play">Play</button>
					</div>
				</div>`,
	homework: `<div class="homework-wrap">
					<h2 class="main-title">Homework</h2>
					<ul class="homework-list">
						<li class="gramar-item">Learn new words from Unit 1</li>
						<li class="gramar-item">Translate a text "Shops in my city"</li>
						<li class="gramar-item">Work Book: Exercise 3 and 4, page 10</li>
						<li class="gramar-item">Work Book: Exercise 3A and 3B, page 12</li>
						<li class="gramar-item">Make a dialogue "My work day"</li>
					</ul>	
				</div>`,					
},

{
	unit: 'Unit-2',
	gramar: `<h2 class="main-title">Past Simple (was, were)</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> was/were <span>+</span> object<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">I was a student</li>
							<li class="example-item">You were a student</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> was/were <span>+</span> not <span>+</span> object<br>
						<p class="example-item example-item_main">I wasn't in Rome<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">They were not there</li>
							<li class="example-item">She wasn't at work</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Was/were <span>+</span> Subject <span>+</span> object?<br>
						<p class="example-item example-item_main">Were you in a bank yesterday?<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">Was he in the theater last week?</li>
							<li class="example-item">Were they at home in the morning?</li>
						</ul>
					</li>
				</ul>
				<h2 class="main-title">Past Simple (verbs)</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> verb (-ed, II-form) <span>+</span> object<br>
						<p class="example-item example-item_main">We went to the cinema<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">She worked yesterday</li>
							<li class="example-item">I studied at university</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> did <span>+</span> not <span>+</span> verb (I-form) <span>+</span> object<br>
						<p class="example-item example-item_main">I didn't see her yesterday<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">We didn't like football</li>
							<li class="example-item">They didn't call us</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Did <span>+</span> Subject <span>+</span> verb (I-form) <span>+</span> object?<br>
						<p class="example-item example-item_main">Did you watch TV yesterday?<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">Did she make her homework?</li>
							<li class="example-item">Did they went on holiday last year?</li>
						</ul>
					</li>
				</ul>`,
	words: `Another file`,			
	text: `<h2 class="main-title text-title">Telephone conversation</h2>
				<p class="text-paragraph">Hi, Jill! How are you?<img src="units/2/text/0.jpg" style="float: right; width:200px;"></p>
				<p class="text-paragraph">I’m great. I had the best weekend in my life!</p>
				<p class="text-paragraph">Really? How was it?</p>
				<p class="text-paragraph">I went to Pavlo Zibrov’s concert.</p>
				<p class="text-paragraph">Where was it?</p>
				<p class="text-paragraph">It was at Opera and ballet theater. There were a lot of people. The atmosphere was fantastic.</p>
				<p class="text-paragraph"><img src="units/2/text/1.jpg" style="float: left; width:200px;">That sounds nice! Who did you go with?</p>
				<p class="text-paragraph">I was with my boyfriend. But he didn’t like it.</p>
				<p class="text-paragraph">That sounds bad. Why was that?</p>
				<p class="text-paragraph">He didn’t like Pavlo Zibrov. Do you like him?</p>
				<p class="text-paragraph">Yes, of course. He is handsome.</p>
				<p class="text-paragraph">Let’s go to the concert together next time?</p>
				<p class="text-paragraph">Sure. Thank you for calling. See you!</p>
				<p class="text-paragraph">Bye!</p>`,
	practice: `<div class="practice-wrap">
					<div class="practice-wrap-temp">
						<h2 class="main-title practice__title">Choose a category</h2>
						<div class="practice-category">
							<h3 class="practice-category__title">Test</h3>
						</div>
						<div class="practice-category">
							<h3 class="practice-category__title">Exercise</h3>
						</div>
					</div>	
					<div class="practice-test" hidden>
						<span class="count-question"></span>
						<p class="practice-test__text"></p>
						<ul class="practice-test-list">
							<li class="practice-test-item"></li>
							<li class="practice-test-item"></li>
							<li class="practice-test-item"></li>
						</ul>
						<button class="practice-test__btn">Next</button>
					</div>
					<div class="practice-exercise" hidden>
						<span class="count-question-exercise"></span>
						<span class="practice-exercise__mark" hidden></span>
						<p class="practice-exercise__text"></p>
						<div class="words-btn-wrap">
							<button class="practice-test__btn practice-test__btn_check">Check</button>
							<button class="practice-test__btn practice-test__btn_next">Next</button>
						</div>
					</div>
				</div>`,
	listening: `<div class="listening-wrap">
					<div class="track-list">
						<h2 class="main-title track-list_header">Track-1</h2>
					</div>
					<div class="dialogue">
						<img src="units/2/audio/0.jpg">
					</div>
					<div class="audio-player-wrap">
						<audio class="audio-player"></audio>
						<progress class="listening__progress" value="0" max="100"></progress>
						<span class="listening__current-time"></span>
						<span class="listening__duration">0:00</span>
						<input class="listening__volume" type="range"  min="0" max="100">
						<span class="listening__text">Hide Text</span>
						<button class="listening__play">Play</button>
					</div>
				</div>`,
	homework: `<div class="homework-wrap">
					<h2 class="main-title">Homework</h2>
					<ul class="homework-list">
						<li class="gramar-item">Learn new words from Unit 2</li>
						<li class="gramar-item">Work Book: Exercise 1 and 3, page 33</li>
						<li class="gramar-item">Work Book: Exercise 1A, 1B and 3, page 35</li>
						<li class="gramar-item">Make a dialogue "My childhood"</li>
					</ul>	
				</div>`,
},

];

const emptyState = `<div class="empty-overlay" hidden>
						<div class="empty-overlay-modal">
							<p class="empty-overlay__text">It will be added later</p>
							<button class="button empty-overlay__btn">Close</button>
						</div>
					</div>`;