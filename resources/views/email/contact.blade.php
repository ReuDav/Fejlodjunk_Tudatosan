<x-mail::message>

<h1 style="color: black;">Ügyfél neve: {{ $TeljesNev }}</h1>
<br>
<h1 style="color: black;">Ügyfél e-mail címe: <a href="mailto:{{ $Email }}">{{ $Email }}</a></h1>
<br>
<h1 style="color: black;">Ügyfél e-mail telefonszáma: <a href="tel:{{ $Telefon }}">{{ $Telefon }}</a></h1>
<br>
<h1 style="color: black;">Üzenet:</h1><p style="color: black;"> {{ $Uzenet }}</p>

<x-mail::button  :url="'tel:' . $Telefon" style="padding: 2.5rem;">
Felhívom az ügyfelet
</x-mail::button>
<br>
{{ config('app.name') }}
</x-mail::message>
