import { Component, computed } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  imports: [],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
  title = input<string>();
  value = input<number>();
  description = input<string>();
  icon = input<string>();
  chartType = input<'circle' | 'gauge'>('circle');
  max = input<number>(100);
  color = input<string>();

  percent = computed(() => {
    const ratio = ((this.value() ?? 0) / (this.max() ?? 100)) * 100;
    return Math.max(0, Math.min(100, ratio));
  });

  gaugeAngle = computed(() => {
    return -90 + this.percent() * 1.8;
  });
}
