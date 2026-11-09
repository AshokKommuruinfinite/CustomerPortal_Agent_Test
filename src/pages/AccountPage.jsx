import React from 'react';
import accountConfig from '../config/account-details.json';
export default function AccountPage() {
 return (
<section>
<h1>{accountConfig.heading}</h1>
<button>{accountConfig.actions.primary.label}</button>
</section>
 );
}