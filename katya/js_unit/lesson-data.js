const unitAll = [
{
	unit: 'Unit-1',
	gramar: `<h2 class="main-title">Present Simple</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> am/are/is <span>+</span> object<br>
						<p class="example-item example-item_main">He is a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">I am a student</li>
							<li class="example-item">They are students?</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> am/are/is <span>+</span> not <span>+</span> object<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">He wasn't a student</li>
							<li class="example-item">Was he a student?</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Am/are/is <span>+</span> Subject <span>+</span> object?<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">He wasn't a student</li>
							<li class="example-item">Was he a student?</li>
						</ul>
					</li>
				</ul>`,
	words: `Another file`,			
	text: `<h2 class="main-title text-title">My trip to Egypt</h2>
				<p class="text-paragraph">Almost all people are fond of travelling. It is very interesting to see new places, another towns and countries. People may travel either for pleasure or on business. There are various means of travelling. For me there is nothing like travel by air; it is more comfortable, more convenient and, of course, far quicker than any other means. <img src="units/1/text/1.jpg" style="float: right;"> There is none of the dust and dirt of a railway or car journey, none of the trouble of changing from train to steamer and then to another train.</p>
				<p class="text-paragraph">With a train you have speed, comfort and pleasure combined. From the comfortable seat of a railway carriage you have a splendid view of the whole countryside. If you are hungry, you can have a meal in the dining-car; and if a journey is a long one you can have a wonderful bed in a sleeper.</p>
				<p class="text-paragraph">Many people like to travel by car. It is interesting too, because you can see many sights in a short time, you can stop when and where you like, you do not have to buy tickets or carry your suitcases.</p>
				<p class="text-paragraph">A very popular means of travelling is hiking. It is travelling on foot. Walking tours are very interesting. Hitch-hiking is a very popular method of travelling among young people. But it is not as popular in our country as abroad.</p>`,
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
						<li class="gramar-item">Translate a text "My family"</li>
						<li class="gramar-item">Student Book: Exercise 2B, page 32</li>
						<li class="gramar-item">Work Book: Exercise 2B, page 32</li>
						<li class="gramar-item">Make a dialogue "My vacation"</li>
					</ul>	
				</div>`,					
},

{
	unit: 'Unit-2',
	gramar: `<h2 class="main-title">Past Simple</h2>
				<ul>
					<li class="gramar-item gramar-item__img">Subject <span>+</span> was/were <span>+</span> object<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">He wasn't a student</li>
							<li class="example-item">Was he a student?</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_minus">Subject <span>+</span> was/were <span>+</span> not <span>+</span> object<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">He wasn't a student</li>
							<li class="example-item">Was he a student?</li>
						</ul>
					</li>
					<li class="gramar-item gramar-item__img gramar-item_mark">Was/were <span>+</span> Subject <span>+</span> object?<br>
						<p class="example-item example-item_main">He was a student<span class="example-item_triangle"></span></p>
						<ul class="example-list">
							<li class="example-item">He wasn't a student</li>
							<li class="example-item">Was he a student?</li>
						</ul>
					</li>
				</ul>`,
	words: ``,			
	text: `<h2 class="main-title text-title">My trip to Egypt</h2>
				<p class="text-paragraph">Almost all people are fond of travelling. It is very interesting to see new places, another towns and countries. People may travel either for pleasure or on business. There are various means of travelling. For me there is nothing like travel by air; it is more comfortable, more convenient and, of course, far quicker than any other means. <img src="units/1/text/1.jpg" style="float: right;"> There is none of the dust and dirt of a railway or car journey, none of the trouble of changing from train to steamer and then to another train.</p>
				<p class="text-paragraph">With a train you have speed, comfort and pleasure combined. From the comfortable seat of a railway carriage you have a splendid view of the whole countryside. If you are hungry, you can have a meal in the dining-car; and if a journey is a long one you can have a wonderful bed in a sleeper.</p>
				<p class="text-paragraph">Many people like to travel by car. It is interesting too, because you can see many sights in a short time, you can stop when and where you like, you do not have to buy tickets or carry your suitcases.</p>
				<p class="text-paragraph">A very popular means of travelling is hiking. It is travelling on foot. Walking tours are very interesting. Hitch-hiking is a very popular method of travelling among young people. But it is not as popular in our country as abroad.</p>`,
	practice: ``,
	listening: ``,
	homework: ``,
},

];

const emptyState = `<div class="empty-overlay" hidden>
						<div class="empty-overlay-modal">
							<p class="empty-overlay__text">It will be added later</p>
							<button class="button empty-overlay__btn">Close</button>
						</div>
					</div>`;