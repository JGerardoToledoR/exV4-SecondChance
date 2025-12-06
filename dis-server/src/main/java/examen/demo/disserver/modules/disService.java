package examen.demo.disserver.modules;

import org.springframework.stereotype.Service;

@Service
public interface disService {
    double calculateDiscount(disDTO dto);
}
