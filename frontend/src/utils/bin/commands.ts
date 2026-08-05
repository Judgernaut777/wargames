// List of commands that do not require API calls

import * as bin from './index';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
  +---------------+--------------------------+
  |    Command    |          Usage           |
  +===============+==========================+
  | Submit        | submit {USERNAME}:{FLAG} |
  | Ranking Table | show all                 |
  | User Stats    | show {USERNAME}          |
  +---------------+--------------------------+
  
`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ╔════════════════════════════════════════════════════════════════════════╗
  ║                                                                        ║
  ║  ██╗    ██╗ █████╗ ██████╗  ██████╗  █████╗ ███╗   ███╗███████╗███████╗║
  ║  ██║    ██║██╔══██╗██╔══██╗██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔════╝║
  ║  ██║ █╗ ██║███████║██████╔╝██║  ███╗███████║██╔████╔██║█████╗  ███████╗║
  ║  ██║███╗██║██╔══██║██╔══██╗██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║║
  ║  ╚███╔███╔╝██║  ██║██║  ██║╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗███████║║
  ║   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝║
  ║                                                                        ║
  ║            L I N U X   D I A R Y  ·  W L U G   E D I T I O N           ║
  ╚════════════════════════════════════════════════════════════════════════╝

     .--.          LEVEL UP YOUR SHELL FU
    |o_o |         A hands-on Linux wargame — solve levels, capture flags,
    |:_/ |         and climb the leaderboard.
   //   \\ \
  (|     | )      ▸  help                    list available commands
  /'\\_   _/\\     ▸  show all                view the ranking table
  \\___)=(___/     ▸  submit {USERNAME}:{FLAG}  capture a level

  ──────────────────────────────────────────────────────────────────────────
   May the flags be ever in your favor. GLHF!
  ──────────────────────────────────────────────────────────────────────────
`;
};
