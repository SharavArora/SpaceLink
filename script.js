import React, { useState, useEffect } from 'react';
import { Satellite, Globe, Rocket, Radio, Database, Users, Activity, Zap } from 'lucide-react';

export default function SpaceExplorerApp() {
  const [currentTime, setCurrentTime] = useState(new Date());
  // ... other state variables

  useEffect(() => {
    // First external script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = '//pl27695114.revenuecpmgate.com/ab/96/57/ab96570420f0906331484872de3666c7.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Second external script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//pl27695171.revenuecpmgate.com/81a48f685802938b63ad922471d91fea/invoke.js';
    script2.async = true;
    script2.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Your existing app JSX here */}

      {/* Container div required for the second script */}
      <div id="container-81a48f685802938b63ad922471d91fea"></div>
    </div>
  );
}
