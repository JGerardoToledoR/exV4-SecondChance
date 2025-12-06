package examen.demo.disserver.modules;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-discount")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class disController {
    @Autowired
    private disService disService;

    @PostMapping("/calcular")
    public double calcular(@RequestBody disDTO dto) {
        return disService.calculateDiscount(dto);
    }
}
