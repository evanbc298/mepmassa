<?php
// Escala o Frete Padrão (flat_rate) por faixa de quantidade, por classe de frete.
// 1-4 unidades: valor normal da tabela | 5-10: x2 | 11+: x3 + aviso de pedido grande
add_filter('woocommerce_package_rates', function ($rates, $package) {
    foreach ($rates as $rate) {
        if ($rate->method_id !== 'flat_rate') continue;

        $instance_settings = get_option('woocommerce_flat_rate_' . $rate->get_instance_id() . '_settings');
        if (!$instance_settings) continue;

        $qty_by_class = [];
        foreach ($package['contents'] as $item) {
            $class_id = $item['data']->get_shipping_class_id();
            if (!$class_id) continue;
            $qty_by_class[$class_id] = ($qty_by_class[$class_id] ?? 0) + $item['quantity'];
        }
        if (empty($qty_by_class)) continue;

        $total = floatval($instance_settings['cost'] ?? 0);
        $pedido_grande = false;

        foreach ($qty_by_class as $class_id => $qty) {
            $class_cost = floatval($instance_settings['class_cost_' . $class_id] ?? ($instance_settings['no_class_cost'] ?? 0));

            if ($qty <= 4) {
                $mult = 1;
            } elseif ($qty <= 10) {
                $mult = 2;
            } else {
                $mult = 3;
                $pedido_grande = true;
            }

            $total += $class_cost * $mult;
        }

        $rate->set_cost($total);
        if ($pedido_grande) {
            $rate->set_label($rate->get_label() . ' (pedido grande — frete pode ser revisado pela nossa equipe)');
        }
    }
    return $rates;
}, 100, 2);
