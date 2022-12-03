import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustpilot-reviews',
  templateUrl: './trustpilot-reviews.component.html',
  styleUrls: ['./trustpilot-reviews.component.sass']
})
export class TrustpilotReviewsComponent implements OnInit {
  reviews = [
    {
      firstName: 'Tyler',
      lastName: 'Watkins',
      slug: 'I went to atleast 7 different websites…',
      comment:
        'I went to atleast 7 different websites to sell my 07 gold and I did not feel comfortable with selling my gold to any of them. At this website, Josh the customer service guy made me feel extremely comfortable and even took his time to let me fix things on my end without hanging up. I recommend this site beyond belief. Great people and they speak english. Josh is the best and I am so grateful for having him as my customer service agent. This is the website I will use from now on to sell my GP!'
    },
    {
      firstName: 'John ',
      lastName: 'Zulch',
      slug: 'Great!',
      comment:
        'They replied as soon as my payment went through they were fast and very professional and good staff team all in around!'
    },
    {
      firstName: 'Aigars',
      lastName: 'Nartiss',
      slug: 'Sold 50m osrs',
      comment: 'Sold 50m osrs, fast and easy trade, ty'
    },
    {
      firstName: 'Lukas',
      lastName: 'Smith',
      slug: 'A+ fast trade',
      comment: 'A+ fast trade, josh very easy to deal with'
    },
    {
      firstName: 'Steven',
      lastName: 'Moore',
      slug: 'Josh very friendly & helped me ^^',
      comment: ''
    },
    {
      firstName: 'Richard',
      lastName: 'Hubbard',
      slug: 'Service was very quick and easy',
      comment:
        'Service was very quick and easy. also gave me a great swap rate! Josh was very friendly! Will definitely come back!'
    }
  ];

  indexOfFirst = 1;
  indexOfLast = 3;

  displayedReviews = this.reviews.slice(this.indexOfFirst, this.indexOfLast);

  constructor() {}

  ngOnInit(): void {}

  moveForward = () => {
    if (this.indexOfLast < this.reviews.length) {
      this.indexOfLast++;
      this.indexOfFirst++;
      this.displayedReviews = this.reviews.slice(
        this.indexOfFirst,
        this.indexOfLast
      );
    }
  };

  moveBackWard = () => {
    if (this.indexOfFirst > 0) {
      this.indexOfFirst--;
      this.indexOfLast--;
      this.displayedReviews = this.reviews.slice(
        this.indexOfFirst,
        this.indexOfLast
      );
    }
  };
}
