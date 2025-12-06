package examen.demo.disserver.modules;

import org.springframework.stereotype.Service;

@Service
public class DiscountServiceImpl implements disService{

    @Override
    public double calculateDiscount(disDTO dto) {
        double amount = dto.getAmount();
        double discount = dto.getDiscount();
        return (amount * discount) / 100;
    }
}
