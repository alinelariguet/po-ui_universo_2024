import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoModule,
  PoPageModule,
  PoTheme,
  PoThemeService,
  PoThemeTokens,
  PoThemeTypeEnum,
  PoToolbarModule,
  poThemeDefault,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals,
  poThemeDefaultNeutralsDark,
} from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    PoModule,
    PoTemplatesModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
  ];

  myThemeLight: PoThemeTokens = {
    color: {
      brand: {
        '01': {
          lightest: '#f2eaf6',
          lighter: '#d9c2e5',
          light: '#bd94d1',
          base: '#753399',
          dark: '#5b1c7d',
          darker: '#400e58',
          darkest: '#260538',
        },
        '02': {
          base: '#753399'
        },
        '03': {
          base: '#753399'
        }
      },
      action: poThemeDefaultActions,
      neutral: poThemeDefaultNeutrals,
      feedback: poThemeDefaultFeedback
    },
    perComponent: {
      ...poThemeDefaultLightValues.perComponent
    },
    onRoot: {
      ...poThemeDefaultLightValues.onRoot
    }
  };
  
  myThemeDark: PoThemeTokens = {
    color: {
      brand: {
        '01': {
          darkest: '#f2eaf6',
          darker: '#d9c2e5',
          dark: '#bd94d1',
          base: '#753399',
          light: '#5b1c7d',
          lighter: '#400e58',
          lightest: '#260538',
        },
        '02': {
          base: '#b92f72',
        },
        '03': {
          base: '#ffd464',
        }
      },
      action: poThemeDefaultActionsDark,
      neutral: poThemeDefaultNeutralsDark,
      feedback: poThemeDefaultFeedbackDark
    },
    perComponent: {
      ...poThemeDefaultDarkValues.perComponent
    },
    onRoot: {
      ...poThemeDefaultDarkValues.onRoot
    }
  };
  
  myTheme: PoTheme = {
    name: 'myTheme',
    type: {
      light: this.myThemeLight,
      dark: this.myThemeDark
    }
  };


  constructor(private poTheme: PoThemeService) {
    this.poTheme.setTheme(this.myTheme, PoThemeTypeEnum.dark);
  }

  private onClick() {
    alert('Clicked in menu item');
  }
}
