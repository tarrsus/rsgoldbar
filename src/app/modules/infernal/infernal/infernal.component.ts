import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { sendLiveChatMessage } from 'src/app/shared/utils';

@Component({
  selector: 'app-infernal',
  templateUrl: './infernal.component.html',
  styleUrls: ['./infernal.component.sass']
})
export class InfernalComponent implements OnInit {
  regions = [
    {
      imgUrl: './assets/images/flags/USD.png',
      name: 'NA'
    },
    {
      imgUrl: './assets/images/flags/EUR.png',
      name: 'EU'
    },
    {
      imgUrl: './assets/images/flags/AUD.png',
      name: 'AU'
    },
    {
      imgUrl: './assets/images/other.png',
      name: 'Other'
    }
  ];

  platforms = [
    {
      imgUrl: './assets/images/win.png',
      name: 'Win'
    },
    {
      imgUrl: './assets/images/ios.png',
      name: 'Mac'
    }
  ];

  weapons = [
    {
      imgUrl: './assets/images/infernal/bof.png',
      name: 'BOF'
    },
    {
      imgUrl: './assets/images/infernal/acb.png',
      name: 'ACB'
    },
    {
      imgUrl: './assets/images/infernal/dcb.png',
      name: 'DCB'
    },
    {
      imgUrl: './assets/images/infernal/rcb.png',
      name: 'RCB'
    },
    {
      imgUrl: './assets/images/infernal/dhcb.png',
      name: 'DHCB'
    }
  ];

  miscs = [
    {
      imgUrl: './assets/images/infernal/rigour.png',
      name: 'RIGOUR'
    },
    {
      imgUrl: './assets/images/infernal/augury.png',
      name: 'AUGURY'
    },
    {
      imgUrl: './assets/images/infernal/slayer.png',
      name: 'SLAYER TASK'
    }
  ];

  uploadSpeeds = ['1-5 MB', '5-15 MB', '15-50 MB', '50+ MB'];

  ranged = new FormControl(0);
  defence = new FormControl(0);
  prayer = new FormControl(0);
  magic = new FormControl(0);
  hitpoints = new FormControl(0);

  selectedRegion = null;
  selectedPlatform = null;
  selectedSpeed = null;
  selectedWeapon = null;
  selectedMiscs = {
    RIGOUR: false,
    AUGURY: false,
    'SLAYER TASK': false
  };

  constructor() {}
  ngOnInit(): void {}

  public openLiveChat(flag: boolean) {
    if (flag) {
      return;
    }

    const w = window;
    sendLiveChatMessage(`Hello!
    My infernal details:
        Region: ${this.selectedRegion},
        Platform: ${this.selectedPlatform}
        Speed: ${this.selectedSpeed}
        Weapon: ${this.selectedWeapon}
        Misc:
          Rigour: ${this.selectedMiscs.RIGOUR},
          Augury: ${this.selectedMiscs.AUGURY},
          Slayer Task: ${this.selectedMiscs['SLAYER TASK']}
        Stats:
          Ranged = ${this.ranged.value}
          Defence = ${this.defence.value}
          Prayer = ${this.prayer.value}
          Magic =${this.magic.value}
          Hitpoints = ${this.hitpoints.value}
    `);
  }

  public disabled() {
    if (
      this.selectedRegion === null ||
      this.selectedPlatform === null ||
      this.selectedSpeed === null ||
      this.selectedWeapon === null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
