"Capacity: Cuánto trabajo PUEDE hacer el equipo con el tiempo disponible"
"Productivity: Cuánto trabajo REAL hizo el equipo"
Mi comentario: Estas definiciones son MUY buenas y más claras que las que teníamos. Capacity = potencial, Productivity = realidad. Sugiero adoptarlas en Metrics Guide.


Sobre el "Speed Penalty First"

El problema que intentaba resolver: Si una persona completa 10 tasks pero se tardó el doble de lo esperado, técnicamente "cumplió la meta" en cantidad, pero fue ineficiente. La fórmula básica (Completadas ÷ Esperadas) le daría 100% — engañoso.

Cómo lo calculé:

Speed Penalty = Tiempo Esperado Total ÷ Tiempo Real Total = SUMPRODUCT(F11:F16, C11:C16) ÷ SUMPRODUCT(E11:E16, C11:C16)
Numerador: horas que debió tardar (basado en estándares)
Denominador: horas que realmente tardó
Por qué el MIN(1, ...): Para que solo castigue, nunca premie. Si alguien fue más rápido (Speed > 1), se capea en 1 y no infla el score. Si fue más lento (Speed < 1), reduce el resultado proporcionalmente.









Capacity %
Tu equipo:

"Cuánto trabajo PUEDE hacer el equipo con el tiempo disponible"

La nuestra:

"Qué tanto del tiempo esperado estuvo realmente disponible la persona para trabajar, descontando PTO y días por enfermedad."

Diferencia clave: La de tu equipo habla del potencial de output ("cuánto trabajo puede hacer"). La nuestra habla del tiempo disponible ("qué tanto del tiempo estuvo disponible"). Son lo mismo matemáticamente, pero la de tu equipo es más intuitiva para gente no técnica — habla de trabajo, no de horas. ✅

Productivity %
Tu equipo:

"Cuánto trabajo REAL hizo el equipo"

La nuestra:

"Qué tan bien cumplió las metas dado el tiempo que realmente tuvo disponible."

Diferencia clave: La de tu equipo es más directa — "lo que realmente hizo". La nuestra mete el concepto de "metas ajustadas al tiempo", que es más preciso pero más complicado de explicar.


